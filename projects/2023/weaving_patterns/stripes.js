// grid dimensions 
gridX = 30; 
gridY = gridX;

function setup() {
    createCanvas(900, 900)
}

function draw() {
    background(0); 

    let counter = 0;
    let modulo = 2; 

    // determine tile dimensions 
    let gridW = width/gridX;
    let gridH = height/gridY;

    for (let x = 0; x<gridX; x++) {
        for(let y = 0; y< gridY; y++) {
            
            if (counter%modulo == 0) {
                black()
            } else {
                white()
            }
            let px = x * gridW;
            let py = y * gridH;


            rect(x*gridW, y*gridH, gridW, gridH);

            counter ++; 
        }
    }
}

function black() {
    stroke("#f1f1f1")
    fill(0);
}

function white() {
    stroke(0);
    fill("#f1f1f1")
}