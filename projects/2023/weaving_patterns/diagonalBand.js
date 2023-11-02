//mport {black} from "projects/2023/weaving_patterns/colors"
// diagonal weaving pattern. 
// change modulo to generate wider bands. 

let gridX = 30; 
let gridY = gridX; 

let modulo = 5;
let countX = 0;
let countY = 0; 
let motion = 0; 


function setup() {
    createCanvas(900, 900); 
    background(0);
}

function draw() {

    let gridH = height/gridY;
    let gridW = width/gridX;

    if (int(frameCount % 10) == 0) {motion++}
    if (motion > 4) {motion=0}

    strokeWeight(0.1);

    for (let x = 0; x < gridW; x++){
        for(let y = 0; y < gridH; y++) {
            if ((x+y)%modulo==motion) {
                white();
        
            } else {
                fill(0);
            }
            rect(gridW*x, gridH*y, gridW, gridH)
            countY++
        }
        countX++
        noLoop();
    }
}



function white() {
    fill(255, 255, 255, 0.9);
    //fill("f1f1f1")
    stroke(0);
}