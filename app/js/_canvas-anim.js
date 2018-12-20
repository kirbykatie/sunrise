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