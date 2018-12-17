//import DarkSkyApi from 'dark-sky-api';
//import Chroma from 'chroma';

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

//functions to try to smooth the transition. currently not working. this is due to gradients not being able to transition in CSS atm.
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


/*
This is a temporary function in place to run with the test buttons. It will update the background with the accurate daylight 
*/
function testApp(id) {
  let root = document.documentElement;
  let testDate = new Date();
  testDate.setMinutes(0);
  if (id == "night") {
     const night = chroma.scale([[2,0,36],[0,32,59]]);
     let nightGradient = generateGradientBkgd(night);
     console.log(nightGradient);
     root.style.setProperty('--backgroundColor', 'rgba(2, 0, 36, 1)');
     root.style.setProperty('--backgroundGradient', nightGradient);
  } else if (id == "sixAM") {
    root.style.setProperty('--backgroundColor', 'rgba(2, 0, 36, 1)');
     root.style.setProperty('--backgroundGradient', 'linear-gradient(180deg, rgba(2,51,93,1) 0%, rgba(16,76,115,1) 20%, rgba(29,97,130,1) 40%, rgba(43,115,149,1) 60%, rgba(114,158,190,1) 80%, rgba(138,175,205,1) 100%)');
  } else if (id == "sevenAM") {
    root.style.setProperty('--backgroundColor', 'rgb(0,90,167,1)');
     root.style.setProperty('--backgroundGradient', 'linear-gradient(180deg, rgba(0,90,167,1) 0%, rgba(41,141,205,1) 20%, rgba(80,189,242,1) 40%, rgba(192,227,231,1) 60%, rgba(252,240,151,1) 80%, rgba(251,218,134,1) 100%)');
  } else if (id == "noon") {
    const daylight = chroma.scale([[34,121,177],[101,202,238],[189,233,249,1]]);
    let daylightGradient = generateGradientBkgd(daylight);
    console.log(daylightGradient);
    root.style.setProperty('--backgroundGradient', daylightGradient);
  } else if (id == "increment") {
    let night = chroma.scale([[2,0,36],[0,32,59]]);
    setInterval(function () {
      night = tempIncrementGradient(night);
      let newGradient = generateGradientBkgd(night);
      root.style.setProperty('--backgroundGradient', newGradient);
    }, 1000);
  }
  console.log(testDate);
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

  hourID.innerHTML = `${hour > 12 ? hour - 12 : hour}`;
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


