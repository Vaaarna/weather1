async function getWeather(){

  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
  
  const url = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,windspeed_10m&forecast_days=1`;
  const data = await getData(url);
  
  console.log({ data });
  console.log(data["elevation"]);

  };

 document.getElementById("butt1").onclick = function() {getWeather()};


