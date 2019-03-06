/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/_canvas-anim.js":
/*!********************************!*\
  !*** ./app/js/_canvas-anim.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//This is the beginning of all the canvas animations functions\n//also i SUPER don't know what I'm doing lmao\nfunction canvasNight() {\n  const canvas = document.querySelector(\"canvas\");\n  //will need an event listener to resize if screen resizes. However, resizing will erase all items on canvas \n  canvas.setAttribute(\"width\", window.innerWidth);\n  canvas.setAttribute(\"height\", window.innerHeight);\n\n\n  const ctx = canvas.getContext('2d');\n  const centerX = canvas.width / 2;\n  const centerY = canvas.height /2;\n \n  \n  //Use this: https://codepen.io/dicson/pen/GrpLYG\n  //to help with animating stars\n  ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);\n  ctx.fill();\n\n}\n\n//# sourceURL=webpack:///./app/js/_canvas-anim.js?");

/***/ }),

/***/ "./app/js/_data.js":
/*!*************************!*\
  !*** ./app/js/_data.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n\tconst data = {\n\t\t/*within each section is a map - key being a # which will be used to compare \n\t\tthe current minute to/from sunrise/sunset and the value being what is returned \n\t\tfor the app to use to create the gradient.*/\n\t\tdawn: {\n\t\t\t//90: beginning of dawn\n\t\t\t//0: sunrise\n\t\t\t90: `linear-gradient(180deg, rgba(2,0,36,1) 85%, rgba(4,23,46,1) 100%)`,\n\t\t\t89: `linear-gradient(180deg, rgba(2,0,36,1) 84%, rgba(5,26,50,1) 100%)`,\n\t\t\t88: `linear-gradient(180deg, rgba(2,0,36,1) 83%, rgba(6,28,55,1) 100%)`,\n\t\t\t87: `linear-gradient(180deg, rgba(2,0,36,1) 81%, rgba(6,30,60,1) 100%)`,\n\t\t\t86: `linear-gradient(180deg, rgba(2,0,36,1) 80%, rgba(7,33,64,1) 100%)`,\n\t\t\t85: `linear-gradient(180deg, rgba(2,0,36,1) 78%, rgba(8,36,69,1) 100%)`,\n\t\t\t84: `linear-gradient(180deg, rgba(2,0,36,1) 77%, rgba(10,40,74,1) 100%)`,\n\t\t\t83: `linear-gradient(180deg, rgba(2,0,36,1) 75%, rgba(11,44,80,1) 100%)`, \n\t\t\t82: `linear-gradient(180deg, rgba(2,0,36,1) 72%, rgba(11,44,80,1) 100%)`,\n\t\t\t81: `linear-gradient(180deg, rgba(2,0,36,1) 69%, rgba(11,45,81,1) 100%)`,\n\t\t\t80: `linear-gradient(180deg, rgba(2,0,36,1) 67%, rgba(11,46,82,1) 100%)`,\n\t\t\t79: `linear-gradient(180deg, rgba(2,0,36,1) 64%, rgba(11,47,85,1) 100%)`,\n\t\t\t78: `linear-gradient(180deg, rgba(2,0,36,1) 61%, rgba(11,48,86,1) 100%)`,\n\t\t\t77: `linear-gradient(180deg, rgba(2,0,36,1) 58%, rgba(11,49,86,1) 100%)`,\n\t\t\t76: `linear-gradient(180deg, rgba(2,0,36,1) 55%, rgba(11,50,87,1) 100%)`,\n\t\t\t75: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 100%)`,\n\t\t\t70: ``,\n\t\t\t68: ``,\n\t\t\t67: ``,\n\t\t\t60: `linear-gradient(180deg, rgba(2,0,36,1) 40%, rgba(14,64,107,1) 74%, rgba(79,70,59,1) 87%, rgba(143,53,16,1) 100%)`,\n\t\t\t53: ``,\n\t\t\t52: ``,\n\t\t\t50: ``,\n\t\t\t45: `linear-gradient(180deg, rgba(2,0,36,1) 20%, rgba(14,64,107,1) 71%, rgba(80,90,103,1) 82%, rgba(255,181,79,1) 92%, rgba(231,89,30,1) 100%)`,\n\t\t\t44: `linear-gradient(180deg, rgba(2,0,36,1) 19%, rgba(16,61,105,1) 67%, rgba(75,92,108,1) 82%, rgba(255,181,79,1) 91%, rgba(231,92,30,1) 100%)`,\n\t\t\t43: `linear-gradient(180deg, rgba(2,0,36,1) 17%, rgba(20,55,103,1) 64%, rgba(70,94,114,1) 81%, rgba(255,181,79,1) 91%, rgba(231,96,30,1) 100%)`,\n\t\t\t42: `linear-gradient(180deg, rgba(2,0,36,1) 16%, rgba(20,50,100,1) 60%, rgba(65,100,120,1) 80%, rgba(255,181,79,1) 91%, rgba(231,99,30,1) 100%)`,\n\t\t\t41: `linear-gradient(180deg, rgba(2,0,36,1) 15%, rgba(12,31,78,1) 40%, rgba(22,55,100,1) 60%, rgba(77,103,123,1) 80%, rgba(255,181,79,1) 91%, rgba(231,100,30,1) 100%)`,\n\t\t\t40: `linear-gradient(180deg, rgba(2,0,36,1) 13%, rgba(12,35,85,1) 37%, rgba(25,60,100,1) 60%, rgba(80,110,125,1) 80%, rgba(255,181,79,1) 91%, rgba(231,102,30,1) 100%)`,\n\t\t\t39: `linear-gradient(180deg, rgba(2,0,36,1) 12%, rgba(11,37,92,1) 38%, rgba(30,70,105,1) 64%, rgba(88,120,130,1) 80%, rgba(255,181,79,1) 91%, rgba(231,104,30,1) 100%)`,\n\t\t\t38: `linear-gradient(180deg, rgba(2,0,36,1) 10%, rgba(10,40,100,1) 40%, rgba(45,90,110,1) 69%, rgba(95,125,130,1) 80%, rgba(255,181,79,1) 91%, rgba(231,106,30,1) 100%)`,\n\t\t\t37: `linear-gradient(180deg, rgba(2,0,36,1) 9%, rgba(4,36,108,1) 39%, rgba(46,91,113,1) 68%, rgba(97,127,130,1) 80%, rgba(255,182,79,1) 91%, rgba(231,108,30,1) 100%)`,\n\t\t\t36: `linear-gradient(180deg, rgba(2,0,36,1) 7%, rgba(2,34,111,1) 38%, rgba(47,93,115,1) 67%, rgba(99,128,131,1) 80%, rgba(255,184,79,1) 91%, rgba(231,110,30,1) 100%)`,\n\t\t\t35: `linear-gradient(180deg, rgba(2,0,36,1) 5%, rgba(2,32,110,1) 37%, rgba(48,95,117,1) 66%, rgba(100,130,130,1) 80%, rgba(255,187,79,1) 91%, rgba(231,112,30,1) 100%)`,\n\t\t\t34: `linear-gradient(180deg, rgba(2,0,36,1) 4%, rgba(2,30,109,1) 36%, rgba(48,96,120,1) 65%, rgba(102,132,132,1) 79%, rgba(255,190,79,1) 91%, rgba(231,114,30,1) 100%)`,\n\t\t\t33: `linear-gradient(180deg, rgba(2,0,36,1) 3%, rgba(1,31,110,1) 35%, rgba(49,98,126,1) 64%, rgba(108,138,134,1) 79%, rgba(255,193,79,1) 91%, rgba(231,112,30,1) 100%)`,\n\t\t\t32: `linear-gradient(180deg, rgba(2,0,36,1) 2%, rgba(1,31,111,1) 34%, rgba(50,100,130,1) 62%, rgba(115,143,139,1) 78%, rgba(255,195,79,1) 91%, rgba(231,118,30,1) 100%)`,\n\t\t\t31: `linear-gradient(180deg, rgba(2,0,36,1) 1%, rgba(0,32,112,1) 34%, rgba(50,102,130,1) 61%, rgba(122,148,143,1) 77%, rgba(255,199,79,1) 91%, rgba(231,120,30,1) 100%)`,\n\t\t\t30: `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,32,113,1) 33%, rgba(51,103,139,1) 60%, rgba(129,154,146,1) 77%, rgba(255,199,79,1) 91%, rgba(231,123,30,1) 100%)`,\n\t\t\t23: ``,\n\t\t\t22: ``,\n\t\t\t20: ``,\n\t\t\t15: `linear-gradient(180deg, rgba(6,10,99,1) 0%, rgba(0,50,122,1) 21%, rgba(62,119,149,1) 53%, rgba(150,170,163,1) 75%, rgba(255,199,79,1) 86%, rgba(241,170,86,1) 100%)`,\n\t\t\t10: ``,\n\t\t\t8: ``,\n\t\t\t7: ``,\n\t\t\t1: `linear-gradient(180deg, rgba(0,32,113,1) 0%, rgba(24,74,143,1) 21%, rgba(98,168,204,1) 55%, rgba(236,169,64,1) 84%, rgba(255,199,79,1) 100%)`\n\t\t},\n\t\tdaybreak: {\n\t\t\t0: `linear-gradient(180deg, rgba(0,32,113,1) 0%, rgba(24,74,143,1) 21%, rgba(98,168,204,1) 55%, rgba(236,169,64,1) 84%, rgba(255,199,79,1) 100%)`\n\t\t\t//0: sunrise\n\t\t\t//90: day\n\t\t},\n\t\tsunsetting: {\n\t\t\t//0: beginning of sunset\n\t\t\t//90: actual technical sunset\n\t\t},\n\t\tdusk: {\n\t\t\t//0: sunset\n\t\t\t//90: end of dusk\n\t\t}\n\t};\n\treturn data;\n});\n\n//# sourceURL=webpack:///./app/js/_data.js?");

/***/ }),

/***/ "./app/js/_date.js":
/*!*************************!*\
  !*** ./app/js/_date.js ***!
  \*************************/
/*! exports provided: renderDay, renderMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderDay\", function() { return renderDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMonth\", function() { return renderMonth; });\n/*\nUtility function that returns a string relating to the Date Obj's day of week\n@param - {numeral} Date Obj's day of week \n@return - {string} Day name with comma and space at the end\n*/\nfunction renderDay(num){\n  let day;\n  switch (num) {\n    case 0: \n      day = `Sunday, `;\n      break;\n    case 1: \n      day = `Monday, `;\n      break;\n    case 2: \n      day = `Tuesday, `;\n      break;\n    case 3: \n      day = `Wednesday, `;\n      break;\n    case 4: \n      day = `Thursday, `;\n      break;\n    case 5: \n      day = `Friday, `;\n      break;\n    case 6: \n      day = `Saturday, `;\n      break;\n    default:\n      day = `Day, `;\n  }\n  return day;\t\n}\n\n/*\nUtility function that returns a string relating to the Date Obj's month\n@param - {numeral} Date Obj's month \n@return - {string} Month name with space at the end\n*/\nfunction renderMonth(num) {\n  let month;\n  switch (num) {\n    case 0: \n      month = `January `;\n      break;\n    case 1: \n      month = `February `;\n      break;\n    case 2: \n      month = `March `;\n      break;\n    case 3: \n      month = `April `;\n      break;\n    case 4: \n      month = `May `;\n      break;\n    case 5: \n      month = `June `;\n      break;\n    case 6: \n      month = `July `;\n      break;\n    case 7: \n      month = `August `;\n      break;\n    case 8: \n      month = `September `;\n      break;\n    case 9: \n      month = `October `;\n      break;\n    case 10: \n      month = `November `;\n      break;\n    case 11: \n      month = `December `;\n      break;\n    default:\n      month = `Month `;\n  }\n  return month;\n}\n\n\n//# sourceURL=webpack:///./app/js/_date.js?");

/***/ }),

/***/ "./app/js/_utility.js":
/*!****************************!*\
  !*** ./app/js/_utility.js ***!
  \****************************/
/*! exports provided: timeToMins, numKeyToStrMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeToMins\", function() { return timeToMins; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numKeyToStrMap\", function() { return numKeyToStrMap; });\n/*\nUtility function that returns the total minutes since midnight.\n@param - Date object\n@return - {numeral} value of total minutes of day\n*/\nfunction timeToMins(date) {\n  return (date.getHours() * 60) + date.getMinutes();\n}\n/*\nUtility function that takes an object that uses numeral keys and returns a map \nEnsures the keys are actually numerals and not strings\nTO DO - add validation that only numeral keys are being added. For some reason if (Number(k) != NaN) doesn't work.\n*/\nfunction numKeyToStrMap(obj) {\n    let strMap = new Map();\n    for (let k in obj) {\n      strMap.set(Number(k), obj[k]);\n    }\n    return strMap;\n}\n\n//# sourceURL=webpack:///./app/js/_utility.js?");

/***/ }),

/***/ "./app/js/_weather.js":
/*!****************************!*\
  !*** ./app/js/_weather.js ***!
  \****************************/
/*! exports provided: getWeather, renderWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWeather\", function() { return renderWeather; });\n//WIP - moving from main to focus on date & colors first before messing with APIs\n\nfunction getWeather(callback) {\n  //Temp workaround to deal with CORS - handles the CORS request for me. This can't be used in prod\n  const corsAPI = 'https://cors-anywhere.herokuapp.com/'\n  const position = {\n    latitude: 38.609569, \n    longitude: -90.253537\n  };\n  const key = '4121a5412959db9720a7056d374df8e3';\n  const requestURL = `${corsAPI}https://api.darksky.net/forecast/${key}/${position.latitude},${position.longitude}?exclude=['alerts','flags']`;\n\n\n  const request = new XMLHttpRequest();\n  request.open('GET', requestURL, true);\n    request.onreadystatechange = function() {\n      if (this.readyState === 4) {\n        if (this.status >= 200 && this.status < 400) {\n          let data; \n          data = JSON.parse(this.responseText);\n          // Pass the data to the provided callback function\n          callback(data);\n\n        } else { // Handle any errors\n          console.warn('Error getting requested data');\n        }\n      }\n    };\n\n    request.send();\n}\n//Original using the Dark Sky API and will need to use fetch and promises:\n/*function getWeather() {\n  let data = \"hey\";\n  const position = {\n    latitude: 38.609569, \n    longitude: -90.253537\n  };\n\n  DarkSkyApi.apiKey = '4121a5412959db9720a7056d374df8e3';\n  data = DarkSkyApi.loadItAll(\"alerts\", position)\n    .then(result => {\n      console.log(result);\n    });\n  //.then is a function for a Promise. I need to learn promises and how to return data asychnonisly before I can continue\n  return data;\n}*/\n\n/*Try this: \nfunction timeConverter(UNIX_timestamp){\n  var a = new Date(UNIX_timestamp * 1000);\n  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];\n  var year = a.getFullYear();\n  var month = months[a.getMonth()];\n  var date = a.getDate();\n  var hour = a.getHours();\n  var min = a.getMinutes();\n  var sec = a.getSeconds();\n  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;\n  return time;\n}\nconsole.log(timeConverter(0));\nSource: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript\n*/ \n\nfunction renderWeather(data) {\n  console.log(data);\n\n  const weatherContainer = document.querySelector('.weather-container');\n  const currentlyContainer = weatherContainer.querySelector('.currently-container');\n  const dailyContainer = weatherContainer.querySelector('.daily-container');\n  if (data.currently) {\n    currentlyContainer.innerHTML = `\n      <div class=\"currently__icon\">\n        <img src=\"img/${data.currently.icon}.png alt=\"${data.currently.icon}\">\n      </div>\n      <div class=\"currently__content\">\n        <p class=\"currently__temp\">${Math.round(data.currently.temperature)}&deg;</p>\n      </div>\n    `;\n  } //else remove currently container?\n  if (data.daily) {\n    dailyContainer.innerHTML = `\n      \n    `;\n  }\n}\n\n/*\nImages needed: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night, default\n*/\n\n//# sourceURL=webpack:///./app/js/_weather.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_weather */ \"./app/js/_weather.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_date */ \"./app/js/_date.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_utility */ \"./app/js/_utility.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_data */ \"./app/js/_data.js\");\n//import DarkSkyApi from 'dark-sky-api';\n\n\n\n\n\n\n/*\nNOT BEING USED\nCurrently not used - Color Class \nProperites - 4 rgba items \nMethods:\n  renderColor: returns a string of the color written in a way CSS can use it\n  setColor: takes an array with the 4 rgba items and sets the properities accoringly.\n*/\nfunction Color(r = 0, g = 0, b = 0, a = 1) {\n  this.r = r;\n  this.g = g;\n  this.b = b;\n  this.a = a;\n  this.renderColor = function() {\n    return `rgba(${this.r},${this.g},${this.b},${this.a})`;\n  }\n  this.setColor = function(c) {\n    this.r = c[0];\n    this.g = c[1];\n    this.b = c[2];\n    this.a = c[3];\n  }\n}\n\n/*\nNOT BEING USED\nThis is a temporary function that, when run, the background starts to change every 1 second \n*/\nfunction tempIncrementGradient(scale) {\n  let darkestColor = scale(0);\n  let lightestColor = scale(1);\n  darkestColor = darkestColor.brighten(0.05);\n  lightestColor = lightestColor.brighten(0.05);\n  scale = chroma.scale([darkestColor,lightestColor]);\n  console.log(generateGradientBkgd(scale));\n  return scale;\n}\n\n\n//This is a temporary function for testing - it increases the minute of the test date so each run of getBkgd is incremented\nfunction tempFixDate(testDate, i) {\n  let mins = testDate.getMinutes();\n  let hours = testDate.getHours();\n  if (mins >= 59) {\n    testDate.setMinutes(0);\n    if (hours >= 23) {\n       testDate.setHours(0);\n    } else {\n      testDate.setHours(hours + 1);\n    }\n  } else {\n    testDate.setMinutes(mins + i);\n  }\n  console.log('updated time is now ' + testDate);\n  return testDate;\n}\n\n\n/*This function creates the scale based on the current time and sunrise time. \nEventually, the function will only recieve the sunrise & sunset time, but while building it will get current time as well*/\nfunction getBkgd(current, sunrise, sunset, data) {\n  const curMins = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"timeToMins\"])(current);\n  const sunriseMins = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"timeToMins\"])(sunrise);\n  const sunsetMins = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"timeToMins\"])(sunset);\n  const dayMiddle = sunsetMins - sunriseMins;\n  let bkgd;\n  if (curMins < dayMiddle) {\n    if (curMins < sunriseMins) {\n      if ((sunriseMins - curMins) > 90) {\n        console.log('night');\n        //canvasNight();\n      }\n      else {\n        console.log('dawn');\n        console.log('map should target ' + (sunriseMins - curMins));\n        let dawnMap = data.dawn;\n        dawnMap = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"numKeyToStrMap\"])(dawnMap);\n        console.log(dawnMap);\n        bkgd = dawnMap.get(sunriseMins - curMins); \n      }\n    } else {  //sunrise also included\n      if ((curMins - sunriseMins) < 90) {\n        console.log('daybreak');\n        console.log('map should target ' + (curMins - sunriseMins));\n        let daybreakMap = data.daybreak;\n        daybreakMap = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"numKeyToStrMap\"])(daybreakMap);\n        console.log(daybreakMap);\n        bkgd = daybreakMap.get(curMins - sunriseMins);\n      }\n      else {\n        console.log('day');\n      }\n    }\n  } else {\n    if (curMins < sunsetMins) {\n      if ((sunsetMins - curMins) > 90) {\n        console.log('day');\n      }\n      else {\n        console.log('sun starts to set');\n        console.log('map should target ' + (sunsetMins - curMins));\n        let sunsetMap = data.sunsetting;\n        sunsetMap = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"numKeyToStrMap\"])(sunsetMap);\n        console.log(sunsetMap);\n        bkgd = sunsetMap.get(sunsetMins - curMins);\n      }\n    } else { //I THINK also includes sunset \n      if ((curMins - sunsetMins) < 90) {\n        console.log('dusk');\n        console.log('map should target ' + (curMins - sunsetMins));\n        let duskMap = data.dusk;\n        duskMap = Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"numKeyToStrMap\"])(duskMap);\n        console.log(duskMap);\n        bkgd = duskMap.get(curMins - sunsetMins);\n      }\n      else {\n        console.log('night');\n      }\n    }\n  }\n  return bkgd;\n}\n\n/*\nThis is a semi-temporary function in place to run with the test buttons. It will update the background with the accurate daylight \nEventually, this will be adjusted to just get the allGradients data and sunrise/sunset data and kick off the getBkgd() interval\nIt's basically evolved to be the gradient's portion \"main\" function, and should be renamed accordingly.\n*/\nfunction testApp(id) {\n  const allGradients = Object(_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  let root = document.documentElement;\n  let newBkgd;\n  let testDate = new Date();\n  testDate.setMinutes(0);\n  let sunrise = new Date();\n  sunrise.setHours(7);\n  sunrise.setMinutes(0);\n  let sunset = new Date();\n  sunset.setHours(18);  //6pm\n  sunset.setMinutes(0);\n  if (id == \"night\") {\n    testDate.setHours(1);\n  } else if (id == \"dawn\") {\n    testDate.setHours(5);\n    testDate.setMinutes(30);\n  } else if (id == \"daybreak\") {\n    testDate.setHours(7);\n  } else if (id == \"noon\") {\n    testDate.setHours(12);\n  } else if (id == \"sunsetting\") {\n    testDate.setHours(16);\n    testDate.setMinutes(30);\n  } else if (id == \"dusk\") {\n    testDate.setHours(18);\n  } else if (id == \"random\") {\n    console.log('not ready yet');\n    testDate.setHours(6);\n    testDate.setMinutes(15);\n  }\n  console.log(testDate);\n  setInterval(function() {\n    newBkgd = getBkgd(testDate, sunrise, sunset, allGradients);\n    console.log(newBkgd);\n    root.style.setProperty('--backgroundGradient', newBkgd);\n    testDate = tempFixDate(testDate, 1);\n  }, 1000); //starting with 2 seconds\n}\n\n/*\nThis function gets the current date and time and then displays it \nInterval set to run every second\n*/\nfunction setDate() {\n  const hourID = document.querySelector('#hour');\n  const minID = document.querySelector('#minute');\n  const dayID = document.querySelector('#day');\n  const monthID = document.querySelector('#month');\n  const dateID = document.querySelector('#date');\n  const yearID = document.querySelector('#year');\n\n  const now = new Date();\n  let hour = now.getHours();\n  let min = now.getMinutes();\n  let day = now.getDay();\n  let month = now.getMonth();\n  let date = now.getDate();\n  let year = now.getFullYear();\n\n  if (hour == 0) {\n    hourID.innerHTML = 12;\n  } else {\n     hourID.innerHTML = `${hour > 12 ? hour - 12 : hour}`;\n  }\n  minID.innerHTML = `${min < 10 ? '0' : ''}${min}`; \n  dayID.innerHTML = Object(_date__WEBPACK_IMPORTED_MODULE_1__[\"renderDay\"])(day);\n  monthID.innerHTML = Object(_date__WEBPACK_IMPORTED_MODULE_1__[\"renderMonth\"])(month);\n  dateID.innerHTML = `${date}, `; \n  yearID.innerHTML = year;\n}\n\n//Start of script\nsetInterval(setDate, 1000);\n//setInterval(setTheme, (2*60000)); //2 mins\nsetDate();\n//setTheme();\nconst btns = document.querySelectorAll(\"button\").forEach(function(button){\n  button.addEventListener(\"click\", function(event) {\n    testApp(event.target.id);\n  });\n})\n\nfunction weatherCallback(data) {\n  console.log('hello from the callback');\n  Object(_weather__WEBPACK_IMPORTED_MODULE_0__[\"renderWeather\"])(data);\n}\n\n//Commenting out avoid unnecessary calls\nObject(_weather__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(weatherCallback);\n\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************!*\
  !*** multi ./app/js/_canvas-anim.js ./app/js/_data.js ./app/js/_date.js ./app/js/_utility.js ./app/js/_weather.js ./app/js/main.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/blackska/Documents/GitHub/sunrise/app/js/_canvas-anim.js */\"./app/js/_canvas-anim.js\");\n__webpack_require__(/*! /Users/blackska/Documents/GitHub/sunrise/app/js/_data.js */\"./app/js/_data.js\");\n__webpack_require__(/*! /Users/blackska/Documents/GitHub/sunrise/app/js/_date.js */\"./app/js/_date.js\");\n__webpack_require__(/*! /Users/blackska/Documents/GitHub/sunrise/app/js/_utility.js */\"./app/js/_utility.js\");\n__webpack_require__(/*! /Users/blackska/Documents/GitHub/sunrise/app/js/_weather.js */\"./app/js/_weather.js\");\nmodule.exports = __webpack_require__(/*! /Users/blackska/Documents/GitHub/sunrise/app/js/main.js */\"./app/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./app/js/_canvas-anim.js_./app/js/_data.js_./app/js/_date.js_./app/js/_utility.js_./app/js/_weather.js_./app/js/main.js?");

/***/ })

/******/ });