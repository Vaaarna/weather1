
class OneHour {
  constructor(time, temperature, wimd, sunny) {
    this.time = time;
    this.temperature = temperature;
    this.wind = wimd;

  }
}

async function getWeather() {

  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,windspeed_10m&forecast_days=1`;
  const data = await getData(url);

  console.log({ data });

  const stundinas = []

  for (let i = 0; i < 23; i++) {

    let normDate = new Date(data["hourly"]["time"][i])
    let hour = new OneHour(normDate, data["hourly"]["temperature_2m"][i], data["hourly"]["windspeed_10m"][i], 3)

    stundinas.push(hour)

  }
  console.log(stundinas)

};

document.getElementById("butt1").onclick = function () { getWeather() };



