// door element for visual environment 

let door;
let tilesX = 100
let tilesY = 100

function preload() {
    door = loadImage("projects/2023/studio_graphic/assets/door.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight); 
}

function draw() {
    if (door) {
        scale(0.5);
        //translate(windowWidth/2, windowHeight/2);
        // start loop 

        pixelize("GREY", "RECT", door, tilesX, tilesY);
    }
}

function pixelize(MODE, GEO, input, countX, countY) {
    // MODE: GREY, COLOR
    // GEO: ELLIPSE, RECT
    // number of pixels (sq.)

    let tilesH = input.height/countX;
    let tilesW = input.width/countY;

    for (let x=0; x<countX; x++) {
        for (let y=0; y<countY; y++) {
            let px = int(x*tilesW);
            let py = int(y*tilesH);

            let color = input.get(px, py); // color 
            let b = brightness(color) // greyvalue (0, 255)
            let _scaling = map(b, 0, 255, 1, 1); // tweak for scale difference. 

            switch(MODE){
                case "GREY":
                    fill(b);
                    break; 
                case "COLOR": 
                    fill(color);
                    break;    
            }

            switch(GEO){
                case "ELLIPSE": 
                    ellipse(x* tilesW, y*tilesH, tilesW, tilesH);
                    break;
                case "RECT":
                    rectMode(CENTER); 
                
                    rect(x* tilesW, y*tilesH, tilesW*_scaling, tilesH*_scaling);
                    break
            }
    
        }
    }




}