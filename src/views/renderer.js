const { ipcRenderer } = require('electron');

document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = document.getElementById('city').value;
    if (!city.trim()) {
        alert('Please enter a city name.');
        return;
    }

    // Request weather data from the main process
    ipcRenderer.send('open-weather-window', city);
});
