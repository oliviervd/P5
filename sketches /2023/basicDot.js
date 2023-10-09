// basic P5 function that shows a dot, based on where the mouse is on the screen. 

function setup() {
  createCanvas(windowWidth, windowHeight); // set width and height to window
}

function draw() {
  stroke(20);
  background(0);
  fill("#f1f1f1");
  ellipse(mouseX, mouseY, 100, 100);
}