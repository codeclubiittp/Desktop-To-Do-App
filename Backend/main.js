const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dw_se:password@desktop-to-do-app.5tak8.mongodb.net/?retryWrites=true&w=majority&appName=Desktop-To-Do-App";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

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

    // Call the MongoDB run function as soon as the window opens
    run().catch(console.dir);
}

// Define the run function
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Access the database and collection
        const database = client.db('Desktop-To-Do-App');
        const users = database.collection('Users');

        // Add the timestamp field to your document
        const user = {
            name: 'Jaimin',
            password: '12345',
            email: 'jaim7viramgama@gmail.com',
            timestamp: new Date() // Ensure timestamp is a valid UTC datetime
        };

        // Insert the document
        const result = await users.insertOne(user);
        console.log("Inserted document with _id:", result.insertedId);

        // Ping the database to confirm successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. Successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close after finishing
        await client.close();
    }
}

// Set up Electron event listeners
app.whenReady().then(createMainWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

