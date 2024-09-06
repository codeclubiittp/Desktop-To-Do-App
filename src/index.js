// // const {app, BrowserWindow} = require('electron');
// // const url = require('url');
// // const path = require('path');


// // if(process.env.NODE_ENV !== 'production'){
// //     require('electron-reload')(__dirname, {
// //         electron: path.join(__dirname, '../node_modules', '.bin', 'electron.cmd')
// //     });
// // }

// // let mainWindow;

// // const createWindow = () => {
// //     // mainWindow = new BrowserWindow({width: 800, height: 600});
// //     mainWindow = new BrowserWindow({
// //         webPreferences: {
// //             nodeIntegration: true
// //         },
// //         width: 1200,
// //         height: 600,
// //         backgroundColor: '#ffffff',
// //         icon: `file://${__dirname}/public/images/logo.png`
// //     });
// //     mainWindow.loadURL(url.format({
// //         pathname: path.join(__dirname, 'views/index.html'),
// //         protocol: 'file',
// //         slashes: true
// //     }));
// //     mainWindow.on('closed', () => {
// //         mainWindow = null;
// //         app.quit();
// //     });
// // }


// // app.on("ready", async() => {
// //     await createWindow();
// // })
// const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('path');
// const url = require('url');
// const { getWeatherData } = require('./public/functions');  // Import the API function

// let mainWindow;
// let weatherWindow;

// const createWindow = () => {
//     mainWindow = new BrowserWindow({
//         webPreferences: {
//             nodeIntegration: true,
//         },
//         width: 1200,
//         height: 600,
//         backgroundColor: '#ffffff',
//         icon: `file://${__dirname}/public/images/logo.png`,
//     });
//     mainWindow.loadURL(url.format({
//         pathname: path.join(__dirname, 'views/index.html'),
//         protocol: 'file',
//         slashes: true,
//     }));
//     mainWindow.on('closed', () => {
//         mainWindow = null;
//         app.quit();
//     });
// };

// const createWeatherWindow = (weatherData) => {
//     weatherWindow = new BrowserWindow({
//         width: 400,
//         height: 300,
//         webPreferences: {
//             nodeIntegration: true,
//         },
//         title: 'Weather Information',
//     });

//     // Load weather HTML and pass the weather data
//     weatherWindow.loadURL(url.format({
//         pathname: path.join(__dirname, 'views/weather.html'),
//         protocol: 'file',
//         slashes: true,
//     }));

//     // Send the weather data to the weather window
//     weatherWindow.webContents.on('did-finish-load', () => {
//         weatherWindow.webContents.send('weather-data', weatherData);
//     });

//     weatherWindow.on('closed', () => {
//         weatherWindow = null;
//     });
// };

// // Handle IPC to fetch weather data and open weather window
// ipcMain.on('open-weather-window', async (event, city) => {
//     const weatherData = await getWeatherData(city);  // Call the API from functions.js
//     if (weatherData) {
//         createWeatherWindow(weatherData);
//     } else {
//         console.error('Failed to fetch weather data');
//     }
// });

// app.on('ready', createWindow);
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const { getWeatherData } = require('./public/functions');  // Import the API function

let mainWindow;
let weatherWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        },
        backgroundColor: '#ffffff',
        icon: path.join(__dirname, 'public/images/logo.png'),
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
};

const createWeatherWindow = (weatherData) => {
    weatherWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        },
        title: 'Weather Information',
    });

    weatherWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/weather.html'),
        protocol: 'file',
        slashes: true
    }));

    weatherWindow.webContents.on('did-finish-load', () => {
        weatherWindow.webContents.send('weather-data', weatherData);
    });

    weatherWindow.on('closed', () => {
        weatherWindow = null;
    });
};

// Handle IPC to fetch weather data and open weather window
ipcMain.on('open-weather-window', async (event, city) => {
    const weatherData = await getWeatherData(city);  // Call the API from functions.js
    if (weatherData) {
        createWeatherWindow(weatherData);
    } else {
        console.error('Failed to fetch weather data');
    }
});

app.on('ready', createWindow);
