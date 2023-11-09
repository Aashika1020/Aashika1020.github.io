//variables that store reference to their respective elements
const cityInput = document.getElementById('cityInput');
const weatherBtn = document.getElementById('btn');
const weatherContainerDiv = document.getElementById('weather-info');
// API key that was taken from OpenWeatherMap API
const apiKey = '0078b7c7f10b194c19873c9511637faf';

//Adding an event listener to the button
weatherBtn.addEventListener('click', function () {
    const cityName = cityInput.value.trim(); //Assigning the value of input field-> cityInput to cityName
    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }
    //Making an HTTP request to the OpenWeatherMap API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => { //Updating the weather info divison with the proper weather information
            const weatherDesc = data.weather[0].description;
            const temp = data.main.temp;
            const windSpeed = data.wind.speed;

            //This creates a new weather card that will insert it above the existing content
            const weatherCard = document.createElement('div');
            weatherCard.className = 'weather-card';

            const weatherHTML = `  
                <p>The weather in ${cityName} is ${weatherDesc}.</p>   
                <p>The temperature is ${temp}°C with a wind speed of ${windSpeed} m/s</p>
                 <hr style=" background-color:black; height: 1px; width:50%; text-align:center; ">`;//creates a line after each input

            weatherCard.innerHTML = weatherHTML;
            weatherContainerDiv.insertBefore(weatherCard, weatherContainerDiv.firstChild); //Inserts this above the existing content

            //Clears the input field for next input
            cityInput.value = '';
        })
        .catch(error => {
            //Handles the error
            if (error.message === 'City not found') {
                alert('City cannot be found. Please enter a valid city name.');
            } else {
                console.error('An error occurred:', error);
            }
        });
});