const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');


if(process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron.cmd')
    });
}

let mainWindow;

const createWindow = () => {
    // mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1200,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/public/images/logo.png`
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.on('closed', () => {
        mainWindow = null;
        app.quit();
    });
}


app.on("ready", async() => {
    await createWindow();
})




