// inspired by https://timrodenbroeker.de/trusttheprocess4-data-stream/ 

let txt = "The next big thing will be a lot of small things. The next big thing will be a lot of small things. ";

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(5);
}

function draw(){
    background("#0000ff")
    fill("#f1f1f1")
    textAlign(LEFT, TOP)
    textSize(20);
    textLeading(160);
    textFont("arial");

    var last = txt[txt.length-1] // fetch last letter of the string
    txt = last + txt  // append last letter of the text to the front.
    txt = txt.substring(0, txt.length -1); // delete last letter of the text.  

    text(txt,0, 0, windowWidth, windowHeight)
    //console.log(txt)
}