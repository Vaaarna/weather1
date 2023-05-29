
class oneHourData {
  constructor(time, temperature, wimd, sunny) {
    this.time = time;
    this.temperature = temperature;
    this.wind = wimd;
  }
}

function checkTime(i) { //make time 4:0 into 04:00
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

async function getWeather() {
  // dabut datus no magic interneta DONT TOUCH
  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
  // okai
  const url = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,winddirection_10m&forecast_days=3`;

  const data = await getData(url);

  console.log({ data });

  const oneHourArr = []

  for (let i = 0; i < data["hourly"]["time"].length; i++) {

    
     //turn weird date into uniform simple date
    let thisHourObj = new oneHourData(
      new Date(data["hourly"]["time"][i]),
      data["hourly"]["temperature_2m"][i],
      data["hourly"]["windspeed_10m"][i]
      ) //salikt stundai klat atbilstosos datus

    oneHourArr.push(thisHourObj)

  }
  console.log(oneHourArr)

  let list = document.getElementById("weatherOutputList");

  oneHourArr.forEach((item) => { //iterates trough each item puts on a list in the frontend allegedly
    let li = document.createElement("li");

    let outH = checkTime(item.time.getHours());
    let outMin = checkTime(item.time.getMinutes());
    let outTemp = Math.round(item.temperature);
    let outWimd = Math.round(item.wind);
    if (outTemp < 10) {
      outTemp = "☃️" + outTemp
    }
    else if (outTemp < 18) {
      outTemp = "⛅" + outTemp
    }
    else if (outTemp < 22) {
      outTemp = "☀️" + outTemp
    }
    else {
      outTemp = "🥵" + outTemp
    }

    li.innerText = `${outH}: ${outMin} temp: ${outTemp}°C wimd: ${outWimd} km/h`;

    list.appendChild(li);
  });

};


// Tasks1: DONE!!!
// Tasks2:
// 1. Show only upcoming weather, do not show history.
// 2. Separate days by adding a list item that is "⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯"
// 3. Add additional parameter to the API request (url) to retrieve the wind direction.
// 4. Display an arrow ( 🡠 🡢 🡡 🡣 🡤 🡥 🡦 🡧) that best represents the wind direction.
// 5. If the wind speed is below 5km/h, do not display the arrow.


document.getElementById("butt1").onclick = function () { getWeather() };




