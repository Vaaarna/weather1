
class oneHourData {
  constructor(time, temperature, wimdsp, apparent_temperature, precipitation_probability, weathercode, windspeed_10m, winddirection_10m, is_day) {
    this.time = time;
    this.temperature = temperature;
    this.wimdsp = wimdsp;
    this.apparent_temperature = apparent_temperature;
    this.precipitation_probability = precipitation_probability;
    this.weathercode = weathercode;
    this.windspeed_10m = windspeed_10m;
    this.winddirection_10m = winddirection_10m;
    this.is_day = is_day
  }

  // isGoodForBike() { //checks if weather is good for bikig. later add items to remmeber if sunny if rainy if cold
  //   if (this.temperature < 15) {
  //     return false
  //   }
  //   return true;
  // }
}
function checkTime(i) { //make time 4:0 into 04:00
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// function addEmogis(i) { //what name says
//   if (i < 10) {
//     i = "☃️" + i
//   }
//   else if (i < 18) {
//     i = "⛅" + i
//   }
//   else if (i < 22) {
//     i = "☀️" + i
//   }
//   else {
//     i = "🥵" + i
//   }
//   return i
// }


function getHtmlPic(src, width, title) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  // img.height = height;
  img.title = title;
  return img;
}
function getWeatherImg(weatherCode, height) {

  if (weatherCode == 0) {
    return getHtmlPic("icons2/sun.png", height, "Clear sky")
  } else if (weatherCode == 1) {
    return getHtmlPic("icons2/sunpartlycloudy.png", height, "mainly clear ")
  } else if (weatherCode == 2) {
    return getHtmlPic("icons2/sunmostcloudy.png", height, "partly cloudy")
  } else if (weatherCode == 3) {
    return getHtmlPic("icons2/cloud.png", height, "overcast")
  } else if (weatherCode == 45) {
    return getHtmlPic("icons2/cloud.png", height, "fog")
  } else if (weatherCode == 48) {
    return getHtmlPic("icons2/cloud.png", height, "depositing rime fog")
  } else if (weatherCode == 51) {
    return getHtmlPic("icons2/drizzling.png", height, "light drizzle")
  } else if (weatherCode == 53) {
    return getHtmlPic("icons2/drizzling.png", height, "moderate drizzle")
  } else if (weatherCode == 55) {
    return getHtmlPic("icons2/raining.png", height, "dense drizzle")
  } else if (weatherCode == 56) {
    return getHtmlPic("icons2/raining.png", height, "light Freezing drizzle")
  } else if (weatherCode == 57) {
    return getHtmlPic("icons2/raining.png", height, "dense Freezing Drizzle")
  } else if (weatherCode == 61) {
    return getHtmlPic("icons2/raining.png", height, "slight rain")
  } else if (weatherCode == 63) {
    return getHtmlPic("icons2/raining.png", height, "moderate rain")
  } else if (weatherCode == 65) {
    return getHtmlPic("icons2/stormrainnn.png", height, "heavy  rain")
  } else if (weatherCode == 66) {
    return getHtmlPic("icons2/raining.png", height, " Light Freezing Rain")
  } else if (weatherCode == 67) {
    return getHtmlPic("icons2/stormrainnn.png", height, "heavy intensity Freezing Rain")
  } else if (weatherCode == 71) {
    return getHtmlPic("icons2/snow.png", height, "Snow fall: Slight")
  } else if (weatherCode == 73) {
    return getHtmlPic("icons2/snow.png", height, "moderate Snow fall ")
  } else if (weatherCode == 75) {
    return getHtmlPic("icons2/snow.png", height, "heavy intensity Snow fall")
  } else if (weatherCode == 77) {
    return getHtmlPic("icons2/snow.png", height, "Snow grains")
  } else if (weatherCode == 80) {
    return getHtmlPic("icons2/raining.png", height, "slight rain showers")
  } else if (weatherCode == 81) {
    return getHtmlPic("icons2/raining.png", height, "moderate rain showers")
  } else if (weatherCode == 82) {
    return getHtmlPic("icons2/stormrainnn.png", height, "violent rain showers")
  } else if (weatherCode == 85) {
    return getHtmlPic("icons2/snow.png", height, "Snow showers slight")
  } else if (weatherCode == 86) {
    return getHtmlPic("icons2/snow.png", height, "heavy Snow showers")
  } else if (weatherCode == 95) {
    return getHtmlPic("icons2/storm.png", height, "Thunderstorm")
  } else if (weatherCode == 96) {
    return getHtmlPic("icons2/stormangy.png", height, "Thunderstorm with slight hail")
  } else if (weatherCode == 99) {
    return getHtmlPic("icons2/stormangy.png", height, "Thunderstorm with heavy hail")
  } else {
    return undefined
  }
}
function getMooned(weatherCode, height) {
  if (weatherCode == 0) {
    return getHtmlPic("icons2/moonstars.png", height, "clear")
  } else if (weatherCode == 1) {
    return getHtmlPic("icons2/moonpartlycloud.png", height, "mainly clear")
  } else if (weatherCode == 2) {
    return getHtmlPic("icons2/moonmostloudy.png", height, "partly cloudy")
  } else {
    return getWeatherImg(weatherCode, height);
  }
}

function windDirArrows(i) {
  if (i <= 23) {
    i = "Z "//🡣"
  } else if (i <= 68) {
    i = "ZA "//🡧"
  } else if (i <= 113) {
    i = "A  "//🡠"
  } else if (i <= 158) {
    i = "DA "//🡤 "
  } else if (i <= 203) {
    i = "D  "//🡡"
  } else if (i <= 248) {
    i = "DR "//🡥"
  } else if (i <= 293) {
    i = "R "//🡢"
  } else if (i <= 338) {
    i = "ZR "//🡦"
  } else if (i <= 360) {
    i = "Z "//🡣"
  }
  return i
}

function getWindImg(windDirection, windSpeed, height) {
  if (windSpeed < 5){
    return undefined
  }

  let img = getHtmlPic("icons2/arrow_finalV3_rinalds_parpucis_9a.png", height, "wind arrow")
  
  let scale_factor
  
  if (windSpeed > 25) {
    scale_factor = 1
  } else {
    scale_factor = windSpeed / 25
  }
  img.style.transform = `scale(${scale_factor}, ${scale_factor}) rotate(${windDirection}deg)`
  return img
}


async function getWeather() {
  // dabut datus no magic interneta DONT TOUCH
  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
  // okai
  // const url = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,winddirection_10m&forecast_days=3`;

  // https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,winddirection_10m,is_day&forecast_days=3&timezone=auto
  const url = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,winddirection_10m,is_day&forecast_days=3&timezone=auto`;
  const data = await getData(url);

  console.log({ data });

  const oneHourArr = []

  for (let i = 0; i < data["hourly"]["time"].length; i++) {

    let thisHourObj = new oneHourData( //salikt stundai klat atbilstosos datus
      new Date(data["hourly"]["time"][i]), //turn weird date into uniform simple date
      data["hourly"]["temperature_2m"][i],
      data["hourly"]["windspeed_10m"][i],
      data["hourly"]["apparent_temperature"][i],
      data["hourly"]["precipitation_probability"][i],
      data["hourly"]["weathercode"][i],
      data["hourly"]["windspeed_10m"][i],
      data["hourly"]["winddirection_10m"][i],
      data["hourly"]["is_day"][i]
    )
    oneHourArr.push(thisHourObj)

  }
  console.log(oneHourArr)




  for (i = 0; i < oneHourArr.length; i++) { //iterates trough each item puts on a list in the frontend allegedly
    let item = oneHourArr[i]
    if (item.time < Date.now()) {
      continue
    }

    let outH = checkTime(item.time.getHours());
    let outMin = checkTime(item.time.getMinutes());
    let outTemp = Math.round(item.temperature);
    let outWimdSp = Math.round(item.wimdsp);
    let realFeel = Math.round(item.apparent_temperature);
    let precipitationProb = item.precipitation_probability;
    let windDir = windDirArrows(item.winddirection_10m);

    // let picDiscr = explainWeatherCodes(item.weathercode);

    let list = document.getElementById("weatherOutputList");

    let li = document.createElement("li");
    if (item.is_day == 1) {
      li.className = 'konteiners day';
    } else if (item.is_day == 0) {
      li.className = 'konteiners night';
    } else {
      li.className = 'separator'
    }

    // STUNDAS
    var elemDiv = document.createElement('div');
    elemDiv.className = 'big';
    elemDiv.innerHTML = `${outH}⁰⁰`;
    li.appendChild(elemDiv);

    // ICONA
    let weather_image
    if (item.is_day == 0) {
      weather_image = getMooned(item.weathercode, 100);
    } else {
      weather_image = getWeatherImg(item.weathercode, 100);
    }
    if (typeof (weather_image) != "undefined") {
      weather_image.className = 'big';
      li.appendChild(weather_image);
    }
    // TEMP
    var elemDiv2 = document.createElement('div');
    elemDiv2.className = 'big';
    elemDiv2.innerHTML = `${outTemp}` + '°C';
    li.appendChild(elemDiv2);

    // SMAL
    var elemDiv4 = document.createElement('div');
    elemDiv4.className = 'small';
    elemDiv4.innerHTML = `feels like: ${realFeel}°C <br>
precipitation: ${precipitationProb}% <br>
wind: ${outWimdSp}km/h  ${windDir}`; // TODO: remove arrow
    // elemDiv4.innerHTML = ;ₖₘ
    li.appendChild(elemDiv4);

    // WIND ICON
    let wind_img = getWindImg(item.winddirection_10m, item.wimdsp, 100);
    // console.log(`typeof wind_img: ${typeof(wind_img)}`)
    if (typeof (wind_img) != "undefined") {
      wind_img.className = 'big';
      li.appendChild(wind_img);
    }



    // var elemDiv3 = document.createElement('div');
    // elemDiv3.className = 'big';
    // elemDiv3.innerHTML = `->`;
    // li.appendChild(elemDiv3);


    // li.innerText = `${outH}:${outMin}    temp: ${outTemp}°C (feels like: ${realFeel}°C), ${}, prec.prob: ${precipitationProb}%, wimd: ${outWimdSp}km/h ${windDir}`;


    if (item.time.getHours() == 0) {
      var dividerItem = document.createElement("li");
      var divDivi = document.createElement('div');
      divDivi.className = 'separator big';
      divDivi.innerHTML = "⁺˚*•̩̩͙✩•̩̩͙* ˚ ⁺‧͙ · 。ﾟ☆: *.☽ .* :☆ﾟ. ⁺ ˚ *•̩̩͙✩•̩̩͙*˚⁺";
      dividerItem.appendChild(divDivi);
      list.appendChild(dividerItem);
      //   let seperator = 
      //   seperator.innerText = "⁺˚*•̩̩͙✩•̩̩͙* ˚ ⁺‧͙ · 。ﾟ☆: *.☽ .* :☆ﾟ. ⁺ ˚ *•̩̩͙✩•̩̩͙*˚⁺"

      //   list.appendChild(seperator);
    }

    list.appendChild(li);
  };

};


// Tasks1: DONE!!!
// Tasks2.1: DONE!!!!
// Tasks2.2: DOEN!
// Tasks3: easiest shitttt!!! booom done!! sleepy now
// 

getWeather()
// document.getElementById("butt1").onclick = function () { getWeather() };
