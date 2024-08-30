function getWeather() {
    const apiKey = '5cf655af21f4d0d27902900f68961ea0';
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Vérifie les données complètes
            if (data.cod === 200) {
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

                document.getElementById('weather-result').innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <img src="${iconUrl}" alt="Weather icon">
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                alert(`Error: ${data.message}`);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error retrieving weather data. Please check the console for details.');
        });
}