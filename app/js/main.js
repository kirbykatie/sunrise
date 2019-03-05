//import DarkSkyApi from 'dark-sky-api';

import weather from './_weather';
import {renderDay, renderMonth } from './_date';
import {timeToMins, numKeyToStrMap } from './_utility';
import getColorData from './_data';

/*
NOT BEING USED
Currently not used - Color Class 
Properites - 4 rgba items 
Methods:
  renderColor: returns a string of the color written in a way CSS can use it
  setColor: takes an array with the 4 rgba items and sets the properities accoringly.
*/
function Color(r = 0, g = 0, b = 0, a = 1) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
  this.renderColor = function() {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }
  this.setColor = function(c) {
    this.r = c[0];
    this.g = c[1];
    this.b = c[2];
    this.a = c[3];
  }
}

/*
NOT BEING USED
This is a temporary function that, when run, the background starts to change every 1 second 
*/
function tempIncrementGradient(scale) {
  let darkestColor = scale(0);
  let lightestColor = scale(1);
  darkestColor = darkestColor.brighten(0.05);
  lightestColor = lightestColor.brighten(0.05);
  scale = chroma.scale([darkestColor,lightestColor]);
  console.log(generateGradientBkgd(scale));
  return scale;
}


//This is a temporary function for testing - it increases the minute of the test date so each run of getBkgd is incremented
function tempFixDate(testDate, i) {
  let mins = testDate.getMinutes();
  let hours = testDate.getHours();
  if (mins >= 59) {
    testDate.setMinutes(0);
    if (hours >= 23) {
       testDate.setHours(0);
    } else {
      testDate.setHours(hours + 1);
    }
  } else {
    testDate.setMinutes(mins + i);
  }
  console.log('updated time is now ' + testDate);
  return testDate;
}


/*This function creates the scale based on the current time and sunrise time. 
Eventually, the function will only recieve the sunrise & sunset time, but while building it will get current time as well*/
function getBkgd(current, sunrise, sunset, data) {
  const curMins = timeToMins(current);
  const sunriseMins = timeToMins(sunrise);
  const sunsetMins = timeToMins(sunset);
  const dayMiddle = sunsetMins - sunriseMins;
  let bkgd;
  if (curMins < dayMiddle) {
    if (curMins < sunriseMins) {
      if ((sunriseMins - curMins) > 90) {
        console.log('night');
        //canvasNight();
      }
      else {
        console.log('dawn');
        console.log('map should target ' + (sunriseMins - curMins));
        let dawnMap = data.dawn;
        dawnMap = numKeyToStrMap(dawnMap);
        console.log(dawnMap);
        bkgd = dawnMap.get(sunriseMins - curMins); 
      }
    } else {  //sunrise also included
      if ((curMins - sunriseMins) < 90) {
        console.log('daybreak');
        console.log('map should target ' + (curMins - sunriseMins));
        let daybreakMap = data.daybreak;
        daybreakMap = numKeyToStrMap(daybreakMap);
        console.log(daybreakMap);
        bkgd = daybreakMap.get(curMins - sunriseMins);
      }
      else {
        console.log('day');
      }
    }
  } else {
    if (curMins < sunsetMins) {
      if ((sunsetMins - curMins) > 90) {
        console.log('day');
      }
      else {
        console.log('sun starts to set');
        console.log('map should target ' + (sunsetMins - curMins));
        let sunsetMap = data.sunsetting;
        sunsetMap = numKeyToStrMap(sunsetMap);
        console.log(sunsetMap);
        bkgd = sunsetMap.get(sunsetMins - curMins);
      }
    } else { //I THINK also includes sunset 
      if ((curMins - sunsetMins) < 90) {
        console.log('dusk');
        console.log('map should target ' + (curMins - sunsetMins));
        let duskMap = data.dusk;
        duskMap = numKeyToStrMap(duskMap);
        console.log(duskMap);
        bkgd = duskMap.get(curMins - sunsetMins);
      }
      else {
        console.log('night');
      }
    }
  }
  return bkgd;
}

/*
This is a semi-temporary function in place to run with the test buttons. It will update the background with the accurate daylight 
Eventually, this will be adjusted to just get the allGradients data and sunrise/sunset data and kick off the getBkgd() interval
It's basically evolved to be the gradient's portion "main" function, and should be renamed accordingly.
*/
function testApp(id) {
  const allGradients = getColorData();
  let root = document.documentElement;
  let newBkgd;
  let testDate = new Date();
  testDate.setMinutes(0);
  let sunrise = new Date();
  sunrise.setHours(7);
  sunrise.setMinutes(0);
  let sunset = new Date();
  sunset.setHours(18);  //6pm
  sunset.setMinutes(0);
  if (id == "night") {
    testDate.setHours(1);
  } else if (id == "dawn") {
    testDate.setHours(5);
    testDate.setMinutes(30);
  } else if (id == "daybreak") {
    testDate.setHours(7);
  } else if (id == "noon") {
    testDate.setHours(12);
  } else if (id == "sunsetting") {
    testDate.setHours(16);
    testDate.setMinutes(30);
  } else if (id == "dusk") {
    testDate.setHours(18);
  } else if (id == "random") {
    console.log('not ready yet');
    testDate.setHours(6);
    testDate.setMinutes(15);
  }
  console.log(testDate);
  setInterval(function() {
    newBkgd = getBkgd(testDate, sunrise, sunset, allGradients);
    console.log(newBkgd);
    root.style.setProperty('--backgroundGradient', newBkgd);
    testDate = tempFixDate(testDate, 1);
  }, 1000); //starting with 2 seconds
}

/*
This function gets the current date and time and then displays it 
Interval set to run every second
*/
function setDate() {
  const hourID = document.querySelector('#hour');
  const minID = document.querySelector('#minute');
  const dayID = document.querySelector('#day');
  const monthID = document.querySelector('#month');
  const dateID = document.querySelector('#date');
  const yearID = document.querySelector('#year');

  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let day = now.getDay();
  let month = now.getMonth();
  let date = now.getDate();
  let year = now.getFullYear();

  if (hour == 0) {
    hourID.innerHTML = 12;
  } else {
     hourID.innerHTML = `${hour > 12 ? hour - 12 : hour}`;
  }
  minID.innerHTML = `${min < 10 ? '0' : ''}${min}`; 
  dayID.innerHTML = renderDay(day);
  monthID.innerHTML = renderMonth(month);
  dateID.innerHTML = `${date}, `; 
  yearID.innerHTML = year;
}

//Start of script
setInterval(setDate, 1000);
//setInterval(setTheme, (2*60000)); //2 mins
setDate();
//setTheme();
const btns = document.querySelectorAll("button").forEach(function(button){
  button.addEventListener("click", function(event) {
    testApp(event.target.id);
  });
})

function testCallback(data) {
  console.log('hello from the callback 2');
  console.log(data);
}


//Commenting out avoid unnecessary calls
//weather(testCallback);
