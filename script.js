let phase ="waiting" ;
let lastTimestamp;



 window.addEventListener("mousedown" , function () {

                         if ( phasse = "waiting") {
                           lastTimestamp = undefined;
                           phase = "stretching" ;
                           window.requestAnimationFrame(animate);
                         }
 });

window.addEventListener ( "mouseup" , function () {

                         if ( phase ="stretching") {
                           phase ="turning";
                         }
});


let lastTimestamp;

funtion animate(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
    window.requestAnimationFrame(animate);
    returns;
  }


  switch (phase) {
    case "waiting" ; {
      sticks[sticks.length - 1].length += (timestamp - lastTimestamp) / stretchingSpeed;
case "turning": {
}
sticks[sticks.length - 1].rotation += (timestamp - lastTimestamp) / turningSpeed;
case "walking": {
}
heroX += (timestamp - lastTimestamp) / walkingSpeed;
case "transitioning": {
}
sceneOffset += (timestamp - lastTimestamp) / transitioningSpeed;
case "falling": {
}
heroY+= (timestamp (timestamp - lastTimestamp) / fallingSpeed;
draw();
astTimestamp = timestamp;
window.requestAnimation Frame(animate);
  }

  
let sceneOffset;
let heroX; // Changes when moving forward let heroy; // Only changes when falling
let platforms = []; let sticks = [];
function draw() {
}

 
let sceneOffset;
const canvas = document.getElementById("game"); const ctx = canvas.getContext("2d");
const canvasWidth = 375;
const canvasHeight = 375;
function draw() {
ctx.save();
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
ctx.translate(-sceneOffset, 0);
// Draw scene drawPlatforms(); drawHero();
drawSticks();
// Restore transformation ctx.restore();
}


 
const canvas = document.getElementById("game"); const ctx = canvas.getContext("2d");
const canvasWidth = 375; const canvasHeight = 375; const platformHeight = 100;
let platforms = [
{x: 50, w: 50 },
{x: 90, w: 30 },
];
function drawPlatforms() {
platforms.forEach(({ x, w }) = {
});
// Draw platform
ctx.fillStyle = "black";
ctx.fillRect(x, canvasHeight - platformHeight, w, platformHeight);
}

 
const canvas = document.getElementById("game"); const ctx = canvas.getContext("2d");
const canvasWidth = 375;
const canvasHeight = 375;
let sticks = [
];
{x: 100, length: 50, rotation: 90 }, {x: 120, length: 30, rotation: 45 },
function drawSticks() {
sticks.forEach((stick) ⇒ {
ctx.save();
// Move the anchor point to the start of the stick and rotate ctx.translate(stick.x, canvas Height - platformHeight); ctx.rotate((Math.PI / 180) * stick.rotation);
// Draw stick ctx.beginPath();
ctx.lineWidth
= 2;
ctx.moveTo(0, 0);
ctx.lineTo(0, -stick.length); ctx.stroke();
// Restore transformations ctx.restore();
});
}

 
 

  

  
    
