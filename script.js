const apiKey = "e97daf678fcd133690f75c968dbbdbd5"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=e97daf678fcd133690f75c968dbbdbd5&units=metric&q="

const searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    var data = await response.json()
    console.log(data);
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png"
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "img/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "img/snow.png"
    }
    else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "img/wind.png"
    }
}

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value)
})


