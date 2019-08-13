let city = document.querySelector('.typed')

const createProperSearch = () => {
  let typedName = city.value
  const url = 'http://api.openweathermap.org/data/2.5/weather'
  let search = typedName
  const apiKey = '98f2e44fc966d04df9c6296c9f342706'
  const newUrl = url + '?' + 'q=' + search + '&units=imperial' + '&appid=' + apiKey
  return newUrl
}
const getWeatherAndTemp = () => {
  fetch(createProperSearch())
    .then(response => {
      return response.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector('.display-weather').textContent = city.weather[0].main
      document.querySelector('.display-temp').textContent = city.main.temp
    })
}

// document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', getWeatherAndTemp)