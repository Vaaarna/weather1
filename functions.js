function getWeather(){


  const base = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,windspeed_10m&forecast_days=1`;

  // Using fetch to get data
  fetch(base)
    .then((response) => {
      console.log(response.json());
      // return response.json();

    })
    // .then((data) => {
    //   const { temp } = data.main;
    //   const place = data.name;
    //   const { description, icon } = data.weather[0];
    //   const { sunrise, sunset } = data.sys;
    // });

  };


// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }

 document.getElementById("butt1").onclick = function() {getWeather()};


// const getWether = await() => { 
//     console.log("testlog1");
//     document.getElementById("weatherOutput").innerHTML = "YOU CLICKED ME!";

//     const response =  fetch('https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,windspeed_10m&forecast_days=1');
//    console.log("testlog response");
//     const myJson =  response.json(); //extract JSON from the http response
//     console.log("testlog response");



//     var wind_speed = 22.22;
//     var temperatuer = 25.22;

//     // Wind speed is 22 m/s and tempoeraturs is 25 C. 
// }

