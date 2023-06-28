class oneHourData {
    constructor(
        time,
        temperature,
        wimdsp,
        apparent_temperature,
        precipitation_probability,
        weathercode,
        windspeed_10m,
        winddirection_10m,
        is_day
    ) {
        this.time = time;
        this.temperature = temperature;
        this.wimdsp = wimdsp;
        this.apparent_temperature = apparent_temperature;
        this.precipitation_probability = precipitation_probability;
        this.weathercode = weathercode;
        this.windspeed_10m = windspeed_10m;
        this.winddirection_10m = winddirection_10m;
        this.is_day = is_day;
    }
}
class dayData {
    constructor(
        time,
        weathercode,
        temperature_2m_max,
        temperature_2m_min,
        precipitation_probability_max,
        windspeed_10m_max,
        winddirection_10m_dominant
    ) {
        this.time = time;
        this.weathercode = weathercode;
        this.temperature_2m_max = temperature_2m_max;
        this.temperature_2m_min = temperature_2m_min;
        this.precipitation_probability_max = precipitation_probability_max;
        this.windspeed_10m_max = windspeed_10m_max;
        this.winddirection_10m_dominant = winddirection_10m_dominant;
    }
}

function checkTime(i) {
    //make time 4:0 into 04:00
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getWeatherImg(weatherCode, height) {
    if (weatherCode == 0) {
        return getHtmlPic("icons2/sun.png", height, "Clear sky");
    } else if (weatherCode == 1) {
        return getHtmlPic("icons2/sunpartlycloudy.png", height, "mainly clear ");
    } else if (weatherCode == 2) {
        return getHtmlPic("icons2/sunmostcloudy.png", height, "partly cloudy");
    } else if (weatherCode == 3) {
        return getHtmlPic("icons2/cloud.png", height, "overcast");
    } else if (weatherCode == 45) {
        return getHtmlPic("icons2/cloud.png", height, "fog");
    } else if (weatherCode == 48) {
        return getHtmlPic("icons2/cloud.png", height, "depositing rime fog");
    } else if (weatherCode == 51) {
        return getHtmlPic("icons2/drizzling.png", height, "light drizzle");
    } else if (weatherCode == 53) {
        return getHtmlPic("icons2/drizzling.png", height, "moderate drizzle");
    } else if (weatherCode == 55) {
        return getHtmlPic("icons2/raining.png", height, "dense drizzle");
    } else if (weatherCode == 56) {
        return getHtmlPic("icons2/raining.png", height, "light Freezing drizzle");
    } else if (weatherCode == 57) {
        return getHtmlPic("icons2/raining.png", height, "dense Freezing Drizzle");
    } else if (weatherCode == 61) {
        return getHtmlPic("icons2/raining.png", height, "slight rain");
    } else if (weatherCode == 63) {
        return getHtmlPic("icons2/raining.png", height, "moderate rain");
    } else if (weatherCode == 65) {
        return getHtmlPic("icons2/stormrainnn.png", height, "heavy  rain");
    } else if (weatherCode == 66) {
        return getHtmlPic("icons2/raining.png", height, " Light Freezing Rain");
    } else if (weatherCode == 67) {
        return getHtmlPic("icons2/stormrainnn.png", height, "heavy intensity Freezing Rain");
    } else if (weatherCode == 71) {
        return getHtmlPic("icons2/snow.png", height, "Snow fall: Slight");
    } else if (weatherCode == 73) {
        return getHtmlPic("icons2/snow.png", height, "moderate Snow fall ");
    } else if (weatherCode == 75) {
        return getHtmlPic("icons2/snow.png", height, "heavy intensity Snow fall");
    } else if (weatherCode == 77) {
        return getHtmlPic("icons2/snow.png", height, "Snow grains");
    } else if (weatherCode == 80) {
        return getHtmlPic("icons2/raining.png", height, "slight rain showers");
    } else if (weatherCode == 81) {
        return getHtmlPic("icons2/raining.png", height, "moderate rain showers");
    } else if (weatherCode == 82) {
        return getHtmlPic("icons2/stormrainnn.png", height, "violent rain showers");
    } else if (weatherCode == 85) {
        return getHtmlPic("icons2/snow.png", height, "Snow showers slight");
    } else if (weatherCode == 86) {
        return getHtmlPic("icons2/snow.png", height, "heavy Snow showers");
    } else if (weatherCode == 95) {
        return getHtmlPic("icons2/storm.png", height, "Thunderstorm");
    } else if (weatherCode == 96) {
        return getHtmlPic("icons2/stormangy.png", height, "Thunderstorm with slight hail");
    } else if (weatherCode == 99) {
        return getHtmlPic("icons2/stormangy.png", height, "Thunderstorm with heavy hail");
    } else {
        return undefined;
    }
}
function getMooned(weatherCode, height) {
    if (weatherCode == 0) {
        return getHtmlPic("icons2/moonstars.png", height, "clear");
    } else if (weatherCode == 1) {
        return getHtmlPic("icons2/moonpartlycloud.png", height, "mainly clear");
    } else if (weatherCode == 2) {
        return getHtmlPic("icons2/moonmostloudy.png", height, "partly cloudy");
    } else {
        return getWeatherImg(weatherCode, height);
    }
}

function windDirArrows(i) {
    if (i <= 23) {
        i = "Z "; //🡣"
    } else if (i <= 68) {
        i = "ZA "; //🡧"
    } else if (i <= 113) {
        i = "A  "; //🡠"
    } else if (i <= 158) {
        i = "DA "; //🡤 "
    } else if (i <= 203) {
        i = "D  "; //🡡"
    } else if (i <= 248) {
        i = "DR "; //🡥"
    } else if (i <= 293) {
        i = "R "; //🡢"
    } else if (i <= 338) {
        i = "ZR "; //🡦"
    } else if (i <= 360) {
        i = "Z "; //🡣"
    }
    return i;
}
function getHtmlPic(src, width, title) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.title = title;
    return img;
}
function getWindImg(windDirection, windSpeed, height) {
    let img;
    if (windSpeed < 5) {
        img = getHtmlPic("icons2/arrow1.png", height, "wind arrow");
    } else if (windSpeed < 15) {
        img = getHtmlPic("icons2/arrow2.png", height, "wind arrow");
    } else {
        img = getHtmlPic("icons2/arrow3.png", height, "wind arrow");
    }

    let scale_factor;
    if (windSpeed > 25) {
        scale_factor = 1;
    } else {
        scale_factor = windSpeed / 25;
    }
    img.style.transform = `scale(${scale_factor}, ${scale_factor}) rotate(${windDirection}deg)`;
    return img;
}
function getDayLi(dayData) {
    let outDate = dayData.time.getDate();
    let outDayName = dayNames.get(dayData.time.getDay());
    let outTempMax = Math.round(dayData.temperature_2m_max);
    let outTempMin = Math.round(dayData.temperature_2m_min);
    let outWimdMaxSp = Math.round(dayData.windspeed_10m_max);
    let outPrecipiMaxProb = dayData.precipitation_probability_max;
    let outWindDomDir = windDirArrows(dayData.winddirection_10m_dominant);

    let li = document.createElement("li");
    li.className = "konteiners day";

    // datums dienas nosaukums
    var DivD1 = document.createElement("div");
    DivD1.className = "big";
    DivD1.innerHTML = `${outDate}. <br> ${outDayName}`;
    li.appendChild(DivD1);
    // ikona
    weather_image = getWeatherImg(dayData.weathercode, 100);
    if (typeof weather_image != "undefined") {
        weather_image.className = "big";
        li.appendChild(weather_image);
    }
    // temperatura
    var DivD2 = document.createElement("div");
    DivD2.className = "big";
    DivD2.innerHTML = `${outTempMax}°C <br> ${outTempMin} °C `;
    li.appendChild(DivD2);
    // small
    var DivD3 = document.createElement("div");
    DivD3.className = "small";
    DivD3.innerHTML = `precipitation: ${outPrecipiMaxProb}% <br>
wind: ${outWimdMaxSp}km/h  ${outWindDomDir}`;
    li.appendChild(DivD3);
    // weathervane

    let wind_img = getWindImg(dayData.winddirection_10m_dominant, dayData.windspeed_10m_max, 100);
    if (typeof wind_img != "undefined") {
        wind_img.className = "big";
        li.appendChild(wind_img);
    }
    return li;
}
function getHourLi(hourData) {
    let outH = checkTime(hourData.time.getHours());
    // let outMin = checkTime(item.time.getMinutes());
    let outDate = hourData.time.getDate();
    let outDayName = dayNames.get(hourData.time.getDay());
    let outTemp = Math.round(hourData.temperature);
    let outWimdSp = Math.round(hourData.wimdsp);
    let precipitationProb = hourData.precipitation_probability;
    let windDir = windDirArrows(hourData.winddirection_10m);
    let realFeel = Math.round(hourData.apparent_temperature);

    // create weather hour list

    let li = document.createElement("li");
    if (hourData.is_day == 1) {
        li.className = "konteiners day";
    } else if (hourData.is_day == 0) {
        li.className = "konteiners night";
    } else {
        li.className = "separator";
    }

    // STUNDAS
    var divH1 = document.createElement("div");
    divH1.className = "big";
    divH1.innerHTML = `${outH}⁰⁰`;
    li.appendChild(divH1);

    // ICONA
    let weather_image;
    if (hourData.is_day == 0) {
        weather_image = getMooned(hourData.weathercode, 100);
    } else {
        weather_image = getWeatherImg(hourData.weathercode, 100);
    }
    if (typeof weather_image != "undefined") {
        weather_image.className = "big";
        li.appendChild(weather_image);
    }
    // TEMP
    var divH2 = document.createElement("div");
    divH2.className = "big";
    divH2.innerHTML = `${outTemp}` + "°C";
    li.appendChild(divH2);

    // SMAL
    var divH4 = document.createElement("div");
    divH4.className = "small";
    divH4.innerHTML = `feels like: ${realFeel}°C <br>
    precipitation: ${precipitationProb}% <br>
    wind: ${outWimdSp}km/h  ${windDir}`;
    li.appendChild(divH4);

    // WIND ICON
    let wind_img = getWindImg(hourData.winddirection_10m, hourData.wimdsp, 100);
    if (typeof wind_img != "undefined") {
        wind_img.className = "big";
        li.appendChild(wind_img);
    }

    // if (hourData.time.getHours() == 0) {
    //     var dividerListItem = document.createElement("li");
    //     var dateDiv = document.createElement("div");
    //     dateDiv.className = "separator";
    //     dateDiv.innerHTML = `${outDate}. ${outDayName} ⁺˚*•̩̩͙✩•̩̩͙* ˚ ⁺‧͙ · 。ﾟ☆: *.  ☽  .* :☆ﾟ. ⁺ ˚ *•̩̩͙✩•̩̩͙*˚⁺`;
    //     dividerListItem.appendChild(dateDiv);
    //     listH.appendChild(dividerListItem);
    // }
    return li;
}

const dayNames = new Map([
    [1, "pirmdiena"],
    [2, "otrdiena"],
    [3, "trešdiena"],
    [4, "ceturdiena"],
    [5, "piektdiena"],
    [6, "sestdiena"],
    [0, "svetdiena"],
]);

async function getWeather() {
    // dabut datus no magic interneta DONT TOUCH
    async function getData(url) {
        const response = await fetch(url);
        return response.json();
    }
    var url = new URL("https://api.open-meteo.com/v1/forecast/");
    url.searchParams.append("latitude", 56.959);
    url.searchParams.append("longitude", 24.061);
    url.searchParams.append("daily", "weathercode");
    url.searchParams.append("daily", "temperature_2m_max");
    url.searchParams.append("daily", "temperature_2m_min");
    url.searchParams.append("daily", "precipitation_probability_max");
    url.searchParams.append("daily", "windspeed_10m_max");
    url.searchParams.append("daily", "winddirection_10m_dominant");

    url.searchParams.append("hourly", "temperature_2m");
    url.searchParams.append("hourly", "apparent_temperature");
    url.searchParams.append("hourly", "precipitation_probability");
    url.searchParams.append("hourly", "weathercode");
    url.searchParams.append("hourly", "windspeed_10m");
    url.searchParams.append("hourly", "winddirection_10m");
    url.searchParams.append("hourly", "is_day");

    url.searchParams.append("timezone", "auto");

    let data;
    try {
        data = await getData(url);
    } catch (err) {
        var errorMsg = document.getElementById("errorMsg");
        errorMsg.innerHTML = `YOUVE DONE SHITTED THE PANTS ${err.message}`;
        throw new Error(`YOUVE DONE SHITTED THE PANTS ${err.message}`);
    }

    console.log({ data });

    const oneHourArr = [];
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
        );
        oneHourArr.push(thisHourObj);
    }
    console.log(oneHourArr);

    const dayArr = [];
    for (let i = 0; i < data["daily"]["time"].length; i++) {
        let thisDayObj = new dayData(
            new Date(data["daily"]["time"][i]),
            data["daily"]["weathercode"][i],
            data["daily"]["temperature_2m_max"][i],
            data["daily"]["temperature_2m_min"][i],
            data["daily"]["precipitation_probability_max"][i],
            data["daily"]["windspeed_10m_max"][i],
            data["daily"]["winddirection_10m_dominant"][i]
        );
        dayArr.push(thisDayObj);
    }
    console.log(dayArr);

    for (i = 0; i < oneHourArr.length; i++) {
        //iterates trough each item puts on a list in the frontend allegedly
        if (oneHourArr[i].time < Date.now()) {
            continue;
        }
        let listH = document.getElementById("hWeatherOutputList");
        listH.className = "list1";
        listH.appendChild(getHourLi(oneHourArr[i]));
    }

    for (i = 0; i < dayArr.length; i++) {
        //iterates trough each item puts on a list in the frontend allegedly

        let listD = document.getElementById("DWeatherOutputList");
        listD.appendChild(getDayLi(dayArr[i]));

        // window.addEventListener("load", () => {
        //     for (let i of document.querySelectorAll(".collapse ul")) {
        //         let tog = document.createElement("div");
        //         tog.innerHTML = i.previousSibling.textContent;
        //         tog.className = "toggle";
        //         tog.onclick = () => tog.classList.toggle("show");
        //         i.parentElement.removeChild(i.previousSibling);
        //         i.parentElement.insertBefore(tog, i);
        //     }
        // });
    }
}

getWeather();
