let im;
async function fetchImage(PURL) {
    const _res = await fetch(PURL)
    const data = await _res.json()
    return data
}

function preload() {
    data = fetchImage("https://data.designmuseumgent.be/id/random-image?limit=1").then(
        data=>im=loadImage(data[0].replace("full/full/0/default.jpg","full/,1500/0/default.jpg"))
    )     
}

function setup() {
    background("#f1f1f1");
    //background(0);
    createCanvas(windowWidth, windowHeight); // size canvas (scales with window)
    imageMode(CENTER);  
}

function draw() {

    let tileX = 100; 
    let tileY = tileX;

    let tileW = windowWidth/tileX;
    let tileH = windowHeight/tileY;

    push();
    scale(0.5);
    translate(windowWidth/2, windowHeight/2)

    let wave = map(sin(radians(frameCount)), -1, 1, 0, 100); 

    // wait for image to be loaded (avoid errors)
    if (im){

        for (let x = 0; x < tileX; x++) {
            for (let y = 0; y < tileY; y++) {
                let px = int(x*tileW);
                let py = int(y*tileH);
                let c = im.get(px,py)
                let b = brightness(c)

                if (b < wave) {
                    fill(0);
                } else {
                    fill("#f1f1f1");
                }

                rect(px, py, tileX, tileY)

            }
        }



        //image(im, 0, 0)
    }

    pop();

}