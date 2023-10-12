// genius selection for wall; https://api.collectie.gent/iiif/image/iiif/2/d3db17f3ab47638decba6b44182c0a51-transcode-FH-0066_4-6$1.jpg/full/full/90/default.jpg
// https://api.collectie.gent/iiif/image/iiif/2/d3db17f3ab47638decba6b44182c0a51-transcode-FH-0066_4-6$1.jpg/176,436,4852,1732/1280,/90/default.jpg 

let door; 
function preload() {
    door = loadImage("https://api.collectie.gent/iiif/image/iiif/2/d3db17f3ab47638decba6b44182c0a51-transcode-FH-0066_4-6$1.jpg/176,436,4852,1732/full/90/default.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    if (door) {
        scale(0.2)
        translate(windowWidth/2, windowHeight/2)
        image(door, 0, 0)
    }
    
}