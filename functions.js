function getWeather(){

    let request = new XMLHttpRequest();
    const url = `http://example.com/movies.json`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   function getElements(response) {
    //   $('.showHumidity').text(`The humidity in is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }

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

