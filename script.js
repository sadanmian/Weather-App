const apiKey = "e97daf678fcd133690f75c968dbbdbd5"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=e97daf678fcd133690f75c968dbbdbd5&units=metric&q="

const searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    var data = await response.json()
    // console.log(data);
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
}

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value)
})


