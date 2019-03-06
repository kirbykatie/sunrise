//This is the beginning of all the canvas animations functions
//also i SUPER don't know what I'm doing lmao
function canvasNight() {
  const canvas = document.querySelector("canvas");
  //will need an event listener to resize if screen resizes. However, resizing will erase all items on canvas 
  canvas.setAttribute("width", window.innerWidth);
  canvas.setAttribute("height", window.innerHeight);


  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height /2;
 
  
  //Use this: https://codepen.io/dicson/pen/GrpLYG
  //to help with animating stars
  ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
  ctx.fill();

}
function getColorData() {
	const data = {
		/*within each section is a map - key being a # which will be used to compare 
		the current minute to/from sunrise/sunset and the value being what is returned 
		for the app to use to create the gradient.*/
		dawn: {
			//90: beginning of dawn
			//0: sunrise
			90: `linear-gradient(180deg, rgba(2,0,36,1) 85%, rgba(4,23,46,1) 100%)`,
			89: `linear-gradient(180deg, rgba(2,0,36,1) 84%, rgba(5,26,50,1) 100%)`,
			88: `linear-gradient(180deg, rgba(2,0,36,1) 83%, rgba(6,28,55,1) 100%)`,
			87: `linear-gradient(180deg, rgba(2,0,36,1) 81%, rgba(6,30,60,1) 100%)`,
			86: `linear-gradient(180deg, rgba(2,0,36,1) 80%, rgba(7,33,64,1) 100%)`,
			85: `linear-gradient(180deg, rgba(2,0,36,1) 78%, rgba(8,36,69,1) 100%)`,
			84: `linear-gradient(180deg, rgba(2,0,36,1) 77%, rgba(10,40,74,1) 100%)`,
			83: `linear-gradient(180deg, rgba(2,0,36,1) 75%, rgba(11,44,80,1) 100%)`, 
			82: `linear-gradient(180deg, rgba(2,0,36,1) 72%, rgba(11,44,80,1) 100%)`,
			81: `linear-gradient(180deg, rgba(2,0,36,1) 69%, rgba(11,45,81,1) 100%)`,
			80: `linear-gradient(180deg, rgba(2,0,36,1) 67%, rgba(11,46,82,1) 100%)`,
			79: `linear-gradient(180deg, rgba(2,0,36,1) 64%, rgba(11,47,85,1) 100%)`,
			78: `linear-gradient(180deg, rgba(2,0,36,1) 61%, rgba(11,48,86,1) 100%)`,
			77: `linear-gradient(180deg, rgba(2,0,36,1) 58%, rgba(11,49,86,1) 100%)`,
			76: `linear-gradient(180deg, rgba(2,0,36,1) 55%, rgba(11,50,87,1) 100%)`,
			75: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 100%)`,
			74: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 100%)`,
			73: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 96%, rgba(60,62,59,1) 100%)`,
			72: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 92%, rgba(64,60,60,1) 100%)`,
			71: `linear-gradient(180deg, rgba(2,0,36,1) 49%, rgba(12,54,89,1) 88%, rgba(70,64,64,1) 100%)`,
			70: `linear-gradient(180deg, rgba(2,0,36,1) 48%, rgba(12,58,90,1) 86%, rgba(69,64,59,1) 98%, rgba(100,54,10,1) 100%)`,
			69: `linear-gradient(180deg, rgba(2,0,36,1) 47%, rgba(12,58,90,1) 84%, rgba(69,64,59,1) 97%, rgba(100,35,10,1) 100%)`,
			68: `linear-gradient(180deg, rgba(2,0,36,1) 45%, rgba(12,58,90,1) 82%, rgba(69,64,59,1) 95%, rgba(103,37,11,1) 100%)`,
			67: `linear-gradient(180deg, rgba(2,0,36,1) 45%, rgba(12,58,90,1) 80%, rgba(69,64,59,1) 94%, rgba(106,39,11,1) 100%)`,
			66: ``,
			65: ``,
			64: `linear-gradient(180deg, rgba(2,0,36,1) 43%, rgba(14,60,98,1) 77%, rgba(75,67,59,1) 91%, rgba(126,45,13,1) 100%)`,
			62: ``,
			60: `linear-gradient(180deg, rgba(2,0,36,1) 40%, rgba(14,64,107,1) 74%, rgba(79,70,59,1) 87%, rgba(143,53,16,1) 100%)`,
			53: ``,
			52: ``,
			50: ``,
			45: `linear-gradient(180deg, rgba(2,0,36,1) 20%, rgba(14,64,107,1) 71%, rgba(80,90,103,1) 82%, rgba(255,181,79,1) 92%, rgba(231,89,30,1) 100%)`,
			44: `linear-gradient(180deg, rgba(2,0,36,1) 19%, rgba(16,61,105,1) 67%, rgba(75,92,108,1) 82%, rgba(255,181,79,1) 91%, rgba(231,92,30,1) 100%)`,
			43: `linear-gradient(180deg, rgba(2,0,36,1) 17%, rgba(20,55,103,1) 64%, rgba(70,94,114,1) 81%, rgba(255,181,79,1) 91%, rgba(231,96,30,1) 100%)`,
			42: `linear-gradient(180deg, rgba(2,0,36,1) 16%, rgba(20,50,100,1) 60%, rgba(65,100,120,1) 80%, rgba(255,181,79,1) 91%, rgba(231,99,30,1) 100%)`,
			41: `linear-gradient(180deg, rgba(2,0,36,1) 15%, rgba(12,31,78,1) 40%, rgba(22,55,100,1) 60%, rgba(77,103,123,1) 80%, rgba(255,181,79,1) 91%, rgba(231,100,30,1) 100%)`,
			40: `linear-gradient(180deg, rgba(2,0,36,1) 13%, rgba(12,35,85,1) 37%, rgba(25,60,100,1) 60%, rgba(80,110,125,1) 80%, rgba(255,181,79,1) 91%, rgba(231,102,30,1) 100%)`,
			39: `linear-gradient(180deg, rgba(2,0,36,1) 12%, rgba(11,37,92,1) 38%, rgba(30,70,105,1) 64%, rgba(88,120,130,1) 80%, rgba(255,181,79,1) 91%, rgba(231,104,30,1) 100%)`,
			38: `linear-gradient(180deg, rgba(2,0,36,1) 10%, rgba(10,40,100,1) 40%, rgba(45,90,110,1) 69%, rgba(95,125,130,1) 80%, rgba(255,181,79,1) 91%, rgba(231,106,30,1) 100%)`,
			37: `linear-gradient(180deg, rgba(2,0,36,1) 9%, rgba(4,36,108,1) 39%, rgba(46,91,113,1) 68%, rgba(97,127,130,1) 80%, rgba(255,182,79,1) 91%, rgba(231,108,30,1) 100%)`,
			36: `linear-gradient(180deg, rgba(2,0,36,1) 7%, rgba(2,34,111,1) 38%, rgba(47,93,115,1) 67%, rgba(99,128,131,1) 80%, rgba(255,184,79,1) 91%, rgba(231,110,30,1) 100%)`,
			35: `linear-gradient(180deg, rgba(2,0,36,1) 5%, rgba(2,32,110,1) 37%, rgba(48,95,117,1) 66%, rgba(100,130,130,1) 80%, rgba(255,187,79,1) 91%, rgba(231,112,30,1) 100%)`,
			34: `linear-gradient(180deg, rgba(2,0,36,1) 4%, rgba(2,30,109,1) 36%, rgba(48,96,120,1) 65%, rgba(102,132,132,1) 79%, rgba(255,190,79,1) 91%, rgba(231,114,30,1) 100%)`,
			33: `linear-gradient(180deg, rgba(2,0,36,1) 3%, rgba(1,31,110,1) 35%, rgba(49,98,126,1) 64%, rgba(108,138,134,1) 79%, rgba(255,193,79,1) 91%, rgba(231,112,30,1) 100%)`,
			32: `linear-gradient(180deg, rgba(2,0,36,1) 2%, rgba(1,31,111,1) 34%, rgba(50,100,130,1) 62%, rgba(115,143,139,1) 78%, rgba(255,195,79,1) 91%, rgba(231,118,30,1) 100%)`,
			31: `linear-gradient(180deg, rgba(2,0,36,1) 1%, rgba(0,32,112,1) 34%, rgba(50,102,130,1) 61%, rgba(122,148,143,1) 77%, rgba(255,199,79,1) 91%, rgba(231,120,30,1) 100%)`,
			30: `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,32,113,1) 33%, rgba(51,103,139,1) 60%, rgba(129,154,146,1) 77%, rgba(255,199,79,1) 91%, rgba(231,123,30,1) 100%)`,
			23: ``,
			22: ``,
			20: ``,
			15: `linear-gradient(180deg, rgba(6,10,99,1) 0%, rgba(0,50,122,1) 21%, rgba(62,119,149,1) 53%, rgba(150,170,163,1) 75%, rgba(255,199,79,1) 86%, rgba(241,170,86,1) 100%)`,
			10: ``,
			8: ``,
			7: ``,
			1: `linear-gradient(180deg, rgba(0,32,113,1) 0%, rgba(24,74,143,1) 21%, rgba(98,168,204,1) 55%, rgba(236,169,64,1) 84%, rgba(255,199,79,1) 100%)`
		},
		daybreak: {
			0: `linear-gradient(180deg, rgba(0,32,113,1) 0%, rgba(24,74,143,1) 21%, rgba(98,168,204,1) 55%, rgba(236,169,64,1) 84%, rgba(255,199,79,1) 100%)`
			//0: sunrise
			//90: day

		},
		sunsetting: {
			//0: beginning of sunset
			//90: actual technical sunset
		},
		dusk: {
			//0: sunset
			//90: end of dusk
		}
	};
	return data;
}
/*function renderDay(num) {
	let day;
 	switch (num) {
 		case 0: 
 			day = `Sunday, `;
 			break;
 		case 1: 
 			day = `Monday, `;
 			break;
 		case 2: 
 			day = `Tuesday, `;
 			break;
 		case 3: 
 			day = `Wednesday, `;
 			break;
 		case 4: 
 			day = `Thursday, `;
 			break;
 		case 5: 
 			day = `Friday, `;
 			break;
 		case 6: 
 			day = `Saturday, `;
 			break;
 		default:
 			day = `Day, `;
 	}
	return day;
}

function renderMonth(num) {
	let month;
 	switch (num) {
 		case 0: 
 			month = `January `;
 			break;
 		case 1: 
 			month = `February `;
 			break;
 		case 2: 
 			month = `March `;
 			break;
 		case 3: 
 			month = `April `;
 			break;
 		case 4: 
 			month = `May `;
 			break;
 		case 5: 
 			month = `June `;
 			break;
 		case 6: 
 			month = `July `;
 			break;
 		case 7: 
 			month = `August `;
 			break;
 		case 8: 
 			month = `September `;
 			break;
 		case 9: 
 			month = `October `;
 			break;
 		case 10: 
 			month = `November `;
 			break;
 		case 11: 
 			month = `December `;
 			break;
 		default:
 			month = `Month `;
 	}
	return month;
}
*/
//import DarkSkyApi from 'dark-sky-api';
//import Chroma from 'chroma';
//which im not using anymore LMAO

/*
Utility function that returns a string relating to the Date Obj's day of week
@param - {numeral} Date Obj's day of week 
@return - {string} Day name with comma and space at the end
*/
function renderDay(num) {
  let day;
  switch (num) {
    case 0: 
      day = `Sunday, `;
      break;
    case 1: 
      day = `Monday, `;
      break;
    case 2: 
      day = `Tuesday, `;
      break;
    case 3: 
      day = `Wednesday, `;
      break;
    case 4: 
      day = `Thursday, `;
      break;
    case 5: 
      day = `Friday, `;
      break;
    case 6: 
      day = `Saturday, `;
      break;
    default:
      day = `Day, `;
  }
  return day;
}

/*
Utility function that returns a string relating to the Date Obj's month
@param - {numeral} Date Obj's month 
@return - {string} Month name with space at the end
*/
function renderMonth(num) {
  let month;
  switch (num) {
    case 0: 
      month = `January `;
      break;
    case 1: 
      month = `February `;
      break;
    case 2: 
      month = `March `;
      break;
    case 3: 
      month = `April `;
      break;
    case 4: 
      month = `May `;
      break;
    case 5: 
      month = `June `;
      break;
    case 6: 
      month = `July `;
      break;
    case 7: 
      month = `August `;
      break;
    case 8: 
      month = `September `;
      break;
    case 9: 
      month = `October `;
      break;
    case 10: 
      month = `November `;
      break;
    case 11: 
      month = `December `;
      break;
    default:
      month = `Month `;
  }
  return month;
}

/*
Utility function that returns the total minutes since midnight.
@param - Date object
@return - {numeral} value of total minutes of day
*/
function timeToMins(date) {
  return (date.getHours() * 60) + date.getMinutes();
}
/*
Utility function that takes an object that uses numeral keys and returns a map 
Ensures the keys are actually numerals and not strings
TO DO - add validation that only numeral keys are being added. For some reason if (Number(k) != NaN) doesn't work.
*/
function numKeyToStrMap(obj) {
    let strMap = new Map();
    for (let k in obj) {
      strMap.set(Number(k), obj[k]);
    }
    return strMap;
}

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
Creates an even gradient that is always 6 colors
@param - {function} - Chroma.scale function with colors already defined
@return - {string} - String of generated gradient ready to be used in CSS
*/
function generateGradientBkgd(scale) {
  let returnedColor;  //receives the chroma color obj that is returned from scale()
  let gradientStr = `linear-gradient(180deg, `; 
  for (let i = 0; i <= 1; i += 0.2) {
    returnedColor = scale(i);
    gradientStr = gradientStr + `rgba(${Math.round(returnedColor._rgb[0])}, ${Math.round(returnedColor._rgb[1])}, ${Math.round(returnedColor._rgb[2])}, ${Math.round(returnedColor._rgb[3])}) ${Math.round(i*100)}%${i == 1 ? ')' : ','}`;
  }
  return gradientStr;
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

//functions to try to smooth the transition. currently not working and not called anywhere. this is due to gradients not being able to transition in CSS atm.
function startTransition(gradient) {
  let body = document.body;
  let root = document.documentElement;
  root.style.setProperty('--backgroundGradientNew', gradient);
  body.classList.add('transitioning');
}

function stopTransition(gradient) {
  let body = document.body;
  let root = document.documentElement;
  root.style.setProperty('--backgroundGradient', gradient);
  body.classList.remove('transitioning');
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



//# sourceMappingURL=all.js.map
