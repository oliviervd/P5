//import { fetchImage } from "../../utils/image_utils";


// P5 SCRIPT THAT RASTERIZES IMAGES. 

// fetch random image from API Design Museum Gent 
// https://data.designmuseumgent.be/random-image?limit=1

let im; // initiate image 


function preload() {
    data = fetchImage("https://data.designmuseumgent.be/id/random-image?limit=1").then(
        data=>im=loadImage(data[0].replace("full/full/0/default.jpg","full/,1500/0/default.jpg"))
    )     
}

function setup() {
    createCanvas(windowWidth, windowHeight); // size canvas (scales with window)
    imageMode(CENTER);  
}

function draw() {

    background("#f1f1f1");
    background(0);

    let tileX = 200; 
    let tileY = tileX;


    // load this part before the image is loaded
    if (!im) {

    }

    // only load this part once the image is loaded 
    if(im) {
        
        let tileW= im.width/tileX
        let tileH= im.height/tileY

        push()

        scale(0.5)
        translate(windowWidth/2, windowHeight/2)
    

        for (let x= 0; x < tileX; x++) {
            for(let y =0; y <tileY; y++) {

                let px = int(x*tileW)
                let py = int(y*tileH)

                let color = im.get(px, py) // pick color from area 
                let b = brightness(color) // 
                fill(b)

                ellipse(x*tileW, y*tileH, tileW, tileH); // ellipse
            

            }
        }

        pop()

    }

    // onMouseDown --> show original

    
}


async function fetchImage(PURL) {
    const _res = await fetch(PURL)
    const data = await _res.json()
    return data
}