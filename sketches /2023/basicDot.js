// basic P5 function that shows a dot, based on where the mouse is on the screen. 

function setup() {
  createCanvas(windowWidth, windowHeight); // set width and height to window
}

function draw() {

  noStroke();
  
  // change color when pressed down.
  if (mouseIsPressed) {
    console.log("pressed")
    background("#f1f1f1")
    fill(0);

  } else {
    background(0);
    fill("#f1f1f1");
  }

  ellipse(mouseX, mouseY, 100, 100);
}