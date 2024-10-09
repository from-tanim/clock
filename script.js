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

  

  
    
