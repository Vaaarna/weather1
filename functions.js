
class oneHourData {
  constructor(time, temperature, wimdsp, apparent_temperature, precipitation_probability, weathercode, windspeed_10m, winddirection_10m) {
    this.time = time;
    this.temperature = temperature;
    this.wimdsp = wimdsp;
    this.apparent_temperature = apparent_temperature;
    this.precipitation_probability = precipitation_probability;
    this.weathercode = weathercode;
    this.windspeed_10m = windspeed_10m;
    this.winddirection_10m = winddirection_10m
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
function addEmogis(i) { //what name says
  if (i < 10) {
    i = "☃️" + i
  }
  else if (i < 18) {
    i = "⛅" + i
  }
  else if (i < 22) {
    i = "☀️" + i
  }
  else {
    i = "🥵" + i
  }
  return i
}
function explainWeatherCodes(i) {
  if (i == 0) {
    i = "Clear sky"
  } else if (i == 1) {
    i = "mainly clear "
  } else if (i == 2) {
    i = "partly cloudy"
  } else if (i == 3) {
    i = "overcast"
  } else if (i == 45) {
    i = "fog"
  } else if (i == 48) {
    i = "depositing rime fog"
  } else if (i == 51) {
    i = "light Drizzle"
  } else if (i == 53) {
    i = "moderate Drizzle"
  } else if (i == 55) {
    i = "dense Drizzle"
  } else if (i == 56) {
    i = "light Freezing Drizzle"
  } else if (i == 57) {
    i = "dense Freezing Drizzle"
  } else if (i == 61) {
    i = "slight rain"
  } else if (i == 63) {
    i = "moderate rain"
  } else if (i == 65) {
    i = "heavy  rain"
  } else if (i == 66) {
    i = " Light Freezing Rain"
  } else if (i == 67) {
    i = "heavy intensity  	Freezing Rain"
  } else if (i == 71) {
    i = "Snow fall: Slight"
  } else if (i == 73) {
    i = "moderate Snow fall "
  } else if (i == 75) {
    i = "heavy intensity Snow fall"
  } else if (i == 77) {
    i = "Snow grains"
  } else if (i == 80) {
    i = " 	Rain showers: Slight"
  } else if (i == 81) {
    i = "moderate Rain showers"
  } else if (i == 82) {
    i = "violent Rain showers"
  } else if (i == 85) {
    i = "Snow showers slight"
  } else if (i == 86) {
    i = "heavy Snow showers"
  } else if (i == 95) {
    i = "Thunderstorm"
  } else if (i == 96) {
    i = "Thunderstorm with slight hail"
  } else if (i == 99) {
    i = "Thunderstorm with heavy hail"
  } else {
    i = "fuckif i know, die"
  }
  return i
}

function addPic(src, width, height, alt) {
  var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
} 
// sis (bultina uz augsu) i dont know neko... laikam
// Yeeees!!!
// un viss?
// now it says
// [object HTMLImageElement] 
// ne ahh
  

// Jā, jo mēs to img elmentu ieliekam iekšā stringā. yesss. Tā pat kā ar:

// var elemDiv3 = document.createElement('div');
// ...
// li.appendChild(elemDiv3);


// ye, vajag vinu uz htmlu aizsutit?
// hehehehhehe
// kaa tos div-us
// Mums vajag to img objektu appendot tam list itemam. Tā pat kā mēs tos četrus divus jau appendojam. jā
// tas bus nesaistits elements ar tiem div?
// okei meginam
// 
  //  pweeese i need assistance wwwwwweeeeeeeeee hii :******************
  //  omg i got so excited forgot where the kissy button was lmao
  //  awwqwaaaw
  //  silly 🪿
  //  yea 
  //  kas tas?
  //  jautajumazime goose
   
   //nu ja nee es nevaru spiest enter haha 
   // Kāda ir problēma?
   


// ludzu latviski tikai
// NO ACCENTS ALLOWED
// es meginu pielikt bildites attiecigajam weather code, bet kaut kas neiet saka undefined
// Vari iekopēt to error message? Es nevaru lokāli palaist majaslapu
// man nav eerorora 
// bildes vietaa ir UNDEFINED.tolowercase   ok
// fails ir,
// tas nav saistits ar to builder funkciju? <---

// Returns HTML "img" object
function weatherEmog(i) {
  if (i == 0) {
    i = addPic("finIcons/sun.png", 50, 50, 'picDiscr') 
  } else if (i == 1) {
    i = "🌤"
  } else if (i == 2) {
    i = "🌥"
  } else if (i == 3) {
    i = "☁"
  } else if (i == 45) {
    i = "🌫"
  } else if (i == 48) {
    i = "depositing rime fog"
  } else if (i == 51) {
    i = "🌧"
  } else if (i == 53) {
    i = "🌧"
  } else if (i == 55) {
    i = "🌧"
  } else if (i == 56) {
    i = "light 	Freezing Drizzle"
  } else if (i == 57) {
    i = "dense  	Freezing Drizzle"
  } else if (i == 61) {
    i = "slight rain"
  } else if (i == 63) {
    i = "moderate rain"
  } else if (i == 65) {
    i = "heavy  rain"
  } else if (i == 66) {
    i = " Light Freezing Rain"
  } else if (i == 67) {
    i = "heavy intensity  	Freezing Rain"
  } else if (i == 71) {
    i = "Snow fall: Slight"
  } else if (i == 73) {
    i = "moderate Snow fall "
  } else if (i == 75) {
    i = "heavy intensity Snow fall"
  } else if (i == 77) {
    i = "Snow grains"
  } else if (i == 80) {
    i = " 	Rain showers: Slight"
  } else if (i == 81) {
    i = "moderate Rain showers"
  } else if (i == 82) {
    i = "violent Rain showers"
  } else if (i == 85) {
    i = "Snow showers slight"
  } else if (i == 86) {
    i = "heavy Snow showers"
  } else if (i == 95) {
    i = "Thunderstorm: Slight or moderate"
  } else if (i == 96) {
    i = "Thunderstorm with slight hail"
  } else if (i == 99) {
    i = "Thunderstorm with heavy hail"
  } else {
    i = "fuckif i know, die"
  }
  return i
}

function windDirArrows(i) {
  if (i <= 23) {
    i = "Z 🡣"
  } else if (i <= 68) {
    i = "ZA 🡧"
  } else if (i <= 113) {
    i = "A  🡠"
  } else if (i <= 158) {
    i = "DA 🡤 "
  } else if (i <= 203) {
    i = "D  🡡"
  } else if (i <= 248) {
    i = "DR 🡥"
  } else if (i <= 293) {
    i = "R 🡢"
  } else if (i <= 338) {
    i = "ZR 🡦"
  } else if (i < 360) {
    i = "Z 🡣"
  }
  return i
}
//     


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

    let thisHourObj = new oneHourData( //salikt stundai klat atbilstosos datus
      new Date(data["hourly"]["time"][i]), //turn weird date into uniform simple date
      data["hourly"]["temperature_2m"][i],
      data["hourly"]["windspeed_10m"][i],
      data["hourly"]["apparent_temperature"][i],
      data["hourly"]["precipitation_probability"][i],
      data["hourly"]["weathercode"][i],
      data["hourly"]["windspeed_10m"][i],
      data["hourly"]["winddirection_10m"][i]

    )
    oneHourArr.push(thisHourObj)

  }
  console.log(oneHourArr)



  // oneHourArr.forEach((item) =>
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
    // imconfused:(
      let list = document.getElementById("weatherOutputList");
      
      let li = document.createElement("li");
      li.className = 'konteiners';
      
      var elemDiv = document.createElement('div');
      elemDiv.className = 'big';
      elemDiv.innerHTML = `${outH}:${outMin}`;
      li.appendChild(elemDiv);
      
      
      // Šis "weather_image" tagad vairs nebūs emoji (strings), bet HTML img objekts. Un šo img mums vajag appendot list itemam (li)
      let weather_image = weatherEmog(item.weathercode);
      
      console.log(`weather_image type: ${typeof(weather_image)}`) // kads ir vina tips? its object string object string
      if (typeof(weather_image) != String) {
        // Add element only if it is an image. vai sis strada? tagad neraada neko
        weather_image.className = 'big'; // For alignment and stuff
        li.appendChild(weather_image); //  kas tagad notiek 
      }

// Varētu būt ka tas notiek tā'dēļ ka funkcija weatherEmog var atgriezt gan img objektu, gan stringu (emoji). 
// makes sense vajag visus nomainit...
// STRAAADA tho! there is SUN!
// raada bilditi!!! :)))))
// TypeError: Node.appendChild: Argument 1 is not an object. still erroror tho
  // Uncaught (in promise) TypeError: Node.appendChild: Argument 1 is not an object.
  //     getWeather file:///C:/Users/Rasa/Documents/hakingcodingboombaam/weather1/functions.js:313
  //     async* file:///C:/Users/Rasa/Documents/hakingcodingboombaam/weather1/functions.js:362
  //     EventHandlerNonNull* file:///C:/Users/Rasa/Documents/hakingcodingboombaam/weather1/functions.js:362
  // functions.js:313:10
      
      // we get image and put it in the list

    var elemDiv2 = document.createElement('div');
    elemDiv2.className = 'big';
    elemDiv2.innerHTML = `${outTemp}` + '°C';
    // elemDiv2.innerHTML = '<img width="50" height="50" src="finIcons/.png">';
    li.appendChild(elemDiv2);

    var elemDiv3 = document.createElement('div');
    elemDiv3.className = 'big';
    elemDiv3.innerHTML = `${outWimdSp}ₖₘₕ ${windDir}`;
    li.appendChild(elemDiv3);

    var elemDiv4 = document.createElement('div');
    elemDiv4.className = 'small';
    elemDiv4.innerHTML = `${realFeel}°C ${precipitationProb}%`;
    li.appendChild(elemDiv4);

    // li.innerText = `${outH}:${outMin}    temp: ${outTemp}°C (feels like: ${realFeel}°C), ${}, prec.prob: ${precipitationProb}%, wimd: ${outWimdSp}km/h ${windDir}`;


    if (item.time.getHours() == 0) {
      var dividerItem = document.createElement("li");
      var divDivi = document.createElement('div');
      divDivi.className = 'konteiners big';
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


document.getElementById("butt1").onclick = function () { getWeather() };
