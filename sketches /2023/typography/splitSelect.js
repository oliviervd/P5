// P5 that uses mouse to select words based on split

// inspired by https://timrodenbroeker.de/trusttheprocess4-data-stream/ 

let txt = "The next big thing will be a lot of small things.";
let split = txt.split(" ")
console.log(split.length)

/*
function preload(){
    loadFont('assets/font.otf');
}
*/

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
}

function draw(){

    background(0)


    let tileW = windowWidth / split.length

    let red = color("pink") 
    red.setAlpha(200); // set alpha for text
    fill(red) // set color for text 
    noStroke()

    let wave = map(sin(radians(frameCount)), -1, 1, -20, 20)

    for (let i = 0; i < split.length; i++ ) {
        rect(i * tileW, 0, 10 * wave, windowHeight)
    }

    let selector = int(map(mouseX, 0, windowWidth, 0, split.length))
    console.log(selector)
    
    //color 
    let c = color("#f1f1f1") 
    c.setAlpha(200); // set alpha for text
    fill(c) // set color for text 

    push();

    translate(windowWidth/2, windowHeight/2); // center text in the middle of the screen

    textAlign(CENTER, CENTER) 
    textSize(400);
    //textLeading(160);
    textFont("arial");

    text(split[selector].toUpperCase(), 0, 0)

    pop();

}
