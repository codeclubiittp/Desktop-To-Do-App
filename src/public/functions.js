// const fetch = require('node-fetch');

// // Separate API keys for geo and weather
// const geoApiKey = '6eba978cecbfdf385ffc0783fa2dd2cc';
// const weatherApiKey = '2f2625c59ffc063987b092f920099d83';

// // Function to get the coordinates of a city (latitude and longitude) using the geo API
// const getCoordinates = async (city) => {
//     const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${geoApiKey}`;

//     try {
//         const response = await fetch(geoUrl);
//         const data = await response.json();
//         if (data && data.length > 0) {
//             //console.log(data);
//             const lat = data[0].lat;  // Get latitude from the 3rd position
//             const lon = data[0].lon;  // Get longitude from the 4th position
//             return { lat, lon };
//         } else {
//             throw new Error("City not found");
//         }
//     } catch (error) {
//         console.error(`Error fetching coordinates: ${error.message}`);
//         return null;
//     }
// };

// // Function to fetch weather data using latitude and longitude with the weather API
// const getWeatherData = async (lat, lon) => {
//     const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;

//     try {
//         const response = await fetch(weatherUrl);
//         const data = await response.json();
//         if (response.ok) {
//             return data;
//             console.log("fetched succesfully");
//         } else {
//             throw new Error(data.message);
//         }
//     } catch (error) {
//         console.error(`Error fetching weather data: ${error.message}`);
//         return null;
//     }
// };

// module.exports = {
//     getCoordinates,
//     getWeatherData
// };
const fetch = require('node-fetch');

// Separate API keys for geo and weather
const geoApiKey = '6eba978cecbfdf385ffc0783fa2dd2cc';
const weatherApiKey = '2f2625c59ffc063987b092f920099d83';

// Function to get the coordinates of a city and then fetch weather data
const getWeatherData = async (city) => {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${geoApiKey}`;

    try {
        // Step 1: Fetch coordinates using geo API
        const response = await fetch(geoUrl);
        const data = await response.json();
        
        if (data && data.length > 0) {
            const lat = data[0].lat;  // Get latitude
            const lon = data[0].lon;  // Get longitude

            console.log(`Coordinates of ${city}: Latitude: ${lat}, Longitude: ${lon}`);

            // Step 2: Fetch weather data using the coordinates
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;
            const weatherResponse = await fetch(weatherUrl);
            const weatherData = await weatherResponse.json();
            
            if (weatherResponse.ok) {
                return weatherData;
            } else {
                throw new Error(weatherData.message);
            }
        } else {
            throw new Error("City not found");
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
};

module.exports = {
    getWeatherData
};

