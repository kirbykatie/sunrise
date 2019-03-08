//WIP - moving from main to focus on date & colors first before messing with APIs

export function getWeather(callback) {
  //Temp workaround to deal with CORS - handles the CORS request for me. This can't be used in prod
  const corsAPI = 'https://cors-anywhere.herokuapp.com/'
  const position = {
    latitude: 38.609569, 
    longitude: -90.253537
  };
  const key = '4121a5412959db9720a7056d374df8e3';
  const requestURL = `${corsAPI}https://api.darksky.net/forecast/${key}/${position.latitude},${position.longitude}?exclude=['alerts','flags']`;


  const request = new XMLHttpRequest();
  request.open('GET', requestURL, true);
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          let data; 
          data = JSON.parse(this.responseText);
          // Pass the data to the provided callback function
          callback(data);

        } else { // Handle any errors
          console.warn('Error getting requested data');
        }
      }
    };

    request.send();
}
//Original using the Dark Sky API and will need to use fetch and promises:
/*function getWeather() {
  let data = "hey";
  const position = {
    latitude: 38.609569, 
    longitude: -90.253537
  };

  DarkSkyApi.apiKey = '4121a5412959db9720a7056d374df8e3';
  data = DarkSkyApi.loadItAll("alerts", position)
    .then(result => {
      console.log(result);
    });
  //.then is a function for a Promise. I need to learn promises and how to return data asychnonisly before I can continue
  return data;
}*/

/*Try this: 
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
console.log(timeConverter(0));
Source: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
*/ 

export function renderWeather(data) {
  console.log(data);

  const weatherContainer = document.querySelector('.weather-container');
  const currentlyContainer = weatherContainer.querySelector('.currently-container');
  const dailyContainer = weatherContainer.querySelector('.daily-container');
  if (data.currently) {
    currentlyContainer.innerHTML = `
      <div class="currently__icon">
        <img src="img/${data.currently.icon}.png" alt=${data.currently.icon}>
      </div>
      <div class="currently__content">
        <p class="currently__temp">${Math.round(data.currently.temperature)}&deg;</p>
      </div>
    `;
  } //else remove currently container?
  if (data.daily) {
    dailyContainer.innerHTML = `
      
    `;
  }
}

/*
Images needed: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night, default
*/