
class oneHourData {
  constructor(time, temperature, wimd, sunny) {
    this.time = time;
    this.temperature = temperature;
    this.wind = wimd;

  }
}

async function getWeather() {
// dabut datus no magic interneta DONT TOUCH
  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
// okai
  const url = `https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,windspeed_10m&forecast_days=1`;
  const data = await getData(url);

  console.log({ data });

  const oneHourArr = []

  for (let i = 0; i < 23; i++) {

    let normDate = new Date(data["hourly"]["time"][i]) //turn weird date into uniform simple date
    let thisHourObj = new oneHourData(normDate, data["hourly"]["temperature_2m"][i], data["hourly"]["windspeed_10m"][i]) //salikt stundai klat atbilstosos datus

    oneHourArr.push(thisHourObj)

  }
  console.log(oneHourArr)

};

// Tasks:
// 1. Adjust the "i < 23" condition to use the size of the data["hourly"]["time"] array, instead of being just 23
// 2. Using this tutorial :https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
//    Add a "unordered list (ul)" to the HTML document and then add some javascript code 
//    that adds new "list items (li)" for each hour, showing the time, temperature and wind in each list item.
//    To get the hours and minutes, use .getHours() and .getMinutes() on the Date object in the oneHourData class.
//    Hint: https://pastebin.com/YFW3FQgW
// 3. Notice that the hours are ugly (4:0 instead of 04:00). Create a function that takes the ugly hour (number)
//    and returns a pretty string "04", instead of "4".  Hint: https://stackoverflow.com/a/18229123

// Extra task: In the temperature list show:
//             ☃️ if temperature is less than 10, 
//             ⛅ if temperature is between 10-18, 
//             ☀️ if temperature is between 18-22, 
//             🥵 if temperature is above 22



document.getElementById("butt1").onclick = function () { getWeather() };




