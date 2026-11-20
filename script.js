
// Mock API Data

const weatherData = [
    {
        city: "Karachi",
        temperature: 32,
        condition: "Sunny",
        humidity: 45,
        windSpeed: 12
    },
    {
        city: "Lahore",
        temperature: 28,
        condition: "Cloudy",
        humidity: 55,
        windSpeed: 10
    },
    {
        city: "Islamabad",
        temperature: 24,
        condition: "Rainy",
        humidity: 70,
        windSpeed: 8
    }
];

// Mock API Function

function getWeather(city) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weather = weatherData.find(
                item => item.city.toLowerCase() === city.toLowerCase()
            );

            resolve(weather);
        }, 1000);
    });
}

// HTML Elements

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

// Search Weather Function

async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "<h2>Please enter a city name!</h2>";
        return;
    }

    weatherResult.innerHTML = "<h2>Loading...</h2>";

    const data = await getWeather(city);

    if (data) {
        weatherResult.innerHTML = `
            <h2>${data.city}</h2>
            <h1>${data.temperature}°C</h1>
            <h3>${data.condition}</h3>
            <p>💧 Humidity: ${data.humidity}%</p>
            <p>💨 Wind Speed: ${data.windSpeed} km/h</p>
        `;
    } else {
        weatherResult.innerHTML = "<h2>City Not Found!</h2>";
    }
}

// Button Click Event

searchBtn.addEventListener("click", searchWeather);

// Enter Key Event

cityInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});

