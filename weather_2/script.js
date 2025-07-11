// Mock weather data for demonstration
const mockWeatherData = {
    "london": {
        city: "London",
        temperature: 18,
        description: "Partly Cloudy",
        humidity: 65,
        windSpeed: 12
    },
    "new york": {
        city: "New York",
        temperature: 22,
        description: "Sunny",
        humidity: 55,
        windSpeed: 8
    },
    "paris": {
        city: "Paris",
        temperature: 16,
        description: "Light Rain",
        humidity: 78,
        windSpeed: 15
    },
    "tokyo": {
        city: "Tokyo",
        temperature: 25,
        description: "Clear Sky",
        humidity: 60,
        windSpeed: 10
    },
    "mumbai": {
        city: "Mumbai",
        temperature: 28,
        description: "Hot and Humid",
        humidity: 85,
        windSpeed: 5
    },
    "delhi": {
        city: "Delhi",
        temperature: 32,
        description: "Very Hot",
        humidity: 45,
        windSpeed: 7
    },
    "bangalore": {
        city: "Bangalore",
        temperature: 24,
        description: "Pleasant",
        humidity: 70,
        windSpeed: 12
    }
};

function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim().toLowerCase();
    
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const weatherDisplay = document.getElementById('weatherDisplay');
    
    // Clear previous states
    error.style.display = 'none';
    weatherDisplay.style.display = 'none';
    
    if (!cityName) {
        showError('Please enter a city name');
        return;
    }
    
    // Show loading
    loading.style.display = 'block';
    
    // Simulate API call delay
    setTimeout(() => {
        loading.style.display = 'none';
        
        if (mockWeatherData[cityName]) {
            displayWeather(mockWeatherData[cityName]);
        } else {
            showError('City not found. Try: London, New York, Paris, Tokyo, Mumbai, Delhi, or Bangalore');
        }
    }, 1000);
}

function displayWeather(weatherData) {
    const cityNameElement = document.getElementById('cityName');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const additionalInfoElement = document.getElementById('additionalInfo');
    const weatherDisplay = document.getElementById('weatherDisplay');
    
    cityNameElement.textContent = weatherData.city;
    temperatureElement.textContent = `${weatherData.temperature}°C`;
    descriptionElement.textContent = weatherData.description;
    additionalInfoElement.innerHTML = `
        <div>Humidity: ${weatherData.humidity}%</div>
        <div>Wind Speed: ${weatherData.windSpeed} km/h</div>
    `;
    
    weatherDisplay.style.display = 'block';
}

function showError(message) {
    const error = document.getElementById('error');
    error.textContent = message;
    error.style.display = 'block';
}

// Allow Enter key to trigger search
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});

// Clear input when clicked
document.getElementById('cityInput').addEventListener('focus', function() {
    this.value = '';
});
