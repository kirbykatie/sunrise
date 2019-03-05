//WIP - moving from main to focus on date & colors first before messing with APIs

export default function(callback) {
  //Temp workaround to deal with CORS - handles the CORS request for me. This can't be used in prod
  const corsAPI = 'https://cors-anywhere.herokuapp.com/'
  const position = {
    latitude: 38.609569, 
    longitude: -90.253537
  };
  const key = '4121a5412959db9720a7056d374df8e3';
  const requestURL = `${corsAPI}https://api.darksky.net/forecast/${key}/${position.latitude},${position.longitude}`;


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
