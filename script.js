const key = '966d47f0023c229da517a17f72445b45'

function onScreen(data) {
  console.log(data)

  document.querySelector('.city').innerHTML = 'Tempo em ' + data.name
  document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C'
  document.querySelector('.description').innerHTML = data.weather[0].description
  document.querySelector('.umidade').innerHTML =
    'Umidade: ' + data.main.humidity + '%'
  document.querySelector(
    '.icon-cloud'
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function workData(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then(answer => answer.json())

  onScreen(data)
}

function searchCity() {
  const city = document.querySelector('.search').value

  workData(city)
}
