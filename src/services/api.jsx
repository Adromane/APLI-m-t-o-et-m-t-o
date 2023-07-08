

export async function getWeather(city) {

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.replace(' ', '%20')}&units=metric&appid=e456276e791119aa44edc0607e5dafb6&lang=pt_br`

  const response = await fetch(apiWeatherURL)
  const data = await response.json()
  return data

}

export async function getRainProb(city){

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city.replace(' ', '%20')}&units=metric&appid=e456276e791119aa44edc0607e5dafb6&lang=pt_br`

  const response = await fetch(apiWeatherURL)
  const data = await response.json()
  return data
}
