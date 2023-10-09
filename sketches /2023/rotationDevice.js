// different bodies that rotate. 

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0);
    translate(windowWidth/2, windowHeight/2);

    // rectangle
    rectMode(CENTER); 
    rotate(frameCount*0.01);
    fill("#f1f1f1");
    rect(0, 0, 20, windowWidth*0.33);
}