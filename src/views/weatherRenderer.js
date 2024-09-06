const { ipcRenderer } = require('electron');

// Listen for the 'weather-data' event from the main process
ipcRenderer.on('weather-data', (event, weatherData) => {
    const weatherOutput = document.getElementById('weatherOutput');

    if (!weatherData) {
        weatherOutput.innerHTML = `<p>Unable to fetch weather data.</p>`;
        return;
    }

    // Display the weather information
    weatherOutput.innerHTML = `
        <h2>Weather in ${weatherData.name}</h2>
        <p>Condition: ${weatherData.weather[0].main}</p>
        <p>Description: ${weatherData.weather[0].description}</p>
        <p>Temperature: ${weatherData.main.temp} °C</p>
    `;
});
