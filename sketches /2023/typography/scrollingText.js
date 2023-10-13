// inspired by https://timrodenbroeker.de/trusttheprocess4-data-stream/ 

let txt = "The next big thing will be a lot of small things.";

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
    
    //color 
    let c = color("#f1f1f1") 
    c.setAlpha(200); // set alpha for text
    fill(c) // set color for text 

    translate(0, windowHeight*0.3); // center text in the middle of the screen

    textAlign(LEFT, TOP) 
    textSize(500);
    //textLeading(160);
    textFont("arial");

    var last = txt[txt.length-1] // fetch last letter of the string
    txt = last + txt  // append last letter of the text to the front.
    txt = txt.substring(0, txt.length -1); // delete last letter of the text.  

    text(txt.toUpperCase(), 0, 0)


   


}