// query the page to retrieve DOM elements
const htmlElement = document.documentElement;
const weatherIcon = document.querySelector('.weather-icon');
const weatherLocation = document.querySelector('.weather-location');
const weatherTemperature = document.querySelector('.weather-temperature');
const suggestionElement = document.querySelector('.suggestion');

// Retrieve current position with success and error callback functions

navigator.geolocation.getCurrentPosition(onSuccess, onError);


// function to handle if there's an error accessing current position
function onError(error) {
    weatherLocation.innerText = 'You must permit your browser to access your current location'
    console.error(error);
}

// function to handle what to do after retrieving current position
function onSuccess(position) {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Call an external API to retrieve weather data
    // Open Weather Map API: https://openweathermap.org/

    // Prepare your data (replace this dummy API_KEY with your own)
    // create an account and generate your own key: https://home.openweathermap.org/api_keys
    const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '617d-replace-this-with-your-own-key-950c';
    const UNITS = 'metric';
    const LANGUAGE = 'en';

    // example: https://openweathermap.org/current#one
    const apiUri = `${ENDPOINT}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;

    fetch(apiUri)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Extract needed data
            const locationName = data.name;
            const temperature = Math.floor(data.main.temp);
            const iconCode = data.weather[0].icon;
            const description = data.weather[0].description;

            weatherIcon.alt = description;
            weatherIcon.src = `images/${iconCode}.png`;
            weatherLocation.textContent = locationName;
            weatherTemperature.textContent = `${temperature}°`;

            suggestionElement.textContent = getDescription(iconCode);

            htmlElement.classList.remove('js-loading');
        });
}

// a list of weather descriptions stored by key that corresponds to the Open Weather Map API response data
const descriptions = {
    '01d': 'Remember to apply suncream!',
    '01n': 'Good night!',
    '02d': 'Variable...',
    '02n': 'Beware werewolves...',
    '03d': 'Perfect lighting for photos!',
    '03n': 'Sleep well :)',
    '04d': 'Today: a case of the classic British overcast sky :)',
    '04n': 'So cloudy, you won\'t even see the moon!',
    '09d': 'You might need a brolly.',
    '09n': 'Cover up well today',
    '10d': 'You\'ll need two umbrellas',
    '10n': 'Don\'t expose bare skin to the sun!',
    '11d': 'Wear rubber boots!',
    '11n': 'Might be one or two sparks in the sky',
    '13d': 'Weather for snow-men and snow-angels.',
    '13n': 'Perfect night to be under the stars outside!',
    '50d': 'Fog lights should be on!',
    '50n': 'Drive carefully!',
}

// function to retrieve the correct description
function getDescription(iconCode) {
    return descriptions[iconCode];
}
