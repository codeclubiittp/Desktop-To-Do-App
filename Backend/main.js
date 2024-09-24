const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Function to create the main window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    mainWindow.loadURL('http://localhost:3000'); // React development server URL
}

// Handle messages from the renderer process
ipcMain.on('message-channel', (event, arg) => {
    console.log(arg); // prints "Hello from React!"
    // You can send a response back to the renderer process
    event.reply('response-channel', 'Hello from Electron!');
});

// Send a message to the React frontend after 3 seconds
app.whenReady().then(() => {
    createMainWindow();
    setTimeout(() => {
        const mainWindow = BrowserWindow.getAllWindows()[0];
        mainWindow.webContents.send('response-channel', 'Hello from Electron!');
    }, 3000);
});

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
