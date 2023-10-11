// moire pattern 
// https://en.wikipedia.org/wiki/Moir%C3%A9_pattern 

let numberOfCircles = 10;
let inc = 20;

function setup() {
    createCanvas(windowWidth, windowHeight); 
}

function draw() {
    background(0);

    for (let i = 0; i< constrain(frameCount, 1, 24); i++) {
        noFill();
        stroke("#f1f1f1")
        strokeWeight(2);
        ellipse(windowWidth/2, windowHeight/2, i*inc, i*inc)
        ellipse(mouseX, mouseY, i*inc, i*inc)
    }
}