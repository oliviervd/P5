// door element for visual environment 

let door;
let tilesX = 100;
let tilesY = tilesX; 

function preload() {
    door = loadImage("projects/2023/studio_graphic/assets/door.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight); 
}

function draw() {
    if (door) {
        // start loop 
        let tilesH = windowHeight/tilesY // change to height image. 
        let tilesW = windowWidth/tilesX  // chang to width image. 

        //scale(0.5);
        //translate(windowWidth/2, windowHeight/2);
        //image(door, 0 , 0);

        for (let x=0; x<tilesX; x++) {
            for (let y=0; y<tilesY; y++) {
                let px = int(x*tilesW);
                let py = int(y*tilesH); 

                let c = door.get(px, py); 
                let b = brightness(c); 
                fill(c);
                ellipse(x*tilesW, y*tilesH, tilesW, tilesH);
        
            }
        }

        
        
    }
}