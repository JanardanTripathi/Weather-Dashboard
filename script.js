async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city!');
        return;
    }

    const geocodeUrl = `/api/geocode-proxy?city=${encodeURIComponent(city)}`;

    try {
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        if (!geocodeData.results || geocodeData.results.length === 0) {
            alert('City not found!');
            return;
        }

        const { lat, lng } = geocodeData.results[0].geometry;

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const temperature = weatherData.current_weather.temperature;
        const windSpeed = weatherData.current_weather.windspeed;

        document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} km/h`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data');
    }
}
