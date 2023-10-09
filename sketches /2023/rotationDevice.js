// different bodies that rotate. 

function setup() {
    createCanvas(windowWidth, windowHeight)
    colorMode(RGB, 255, 255, 255, 1);

}

function draw() {
    background(0);
    noStroke();

    // SYSTEM 1 
    push();

    fill(255, 255, 255, 0.7);
    ellipse(windowWidth/2, windowHeight/2, 300, 300);
    pop();

    // SYSTEM 2
    rectMode(CENTER); 
    translate(windowWidth/2, windowHeight/2);

    spinningLine(1); // first line
    spinningLine(0.33) // second line
}

// GEOMATRIES 
function spinningLine(speed) {
    rotate(radians(frameCount)*speed)
    fill(255, 255, 255, 0.8);
    rect(0, 0, 20, windowWidth*0.33);
}
