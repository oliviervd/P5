// fetch random image from API Design Museum Gent 
// https://data.designmuseumgent.be/random-image?limit=1
let im;

async function fetchImage(PURL) {
    const _res = await fetch(PURL)
    const data = await _res.json()
    return data
}

function preload() {
    data = fetchImage("https://data.designmuseumgent.be/id/random-image?limit=1").then(
        data=>im=loadImage(data[0].replace("full/full/0/default.jpg","full/,500/0/default.jpg"))

    )
      
}

function setup() {
    createCanvas(windowWidth, windowHeight)    
    imageMode(CENTER);
}

function draw() {
    if(im) {
        //console.log(im);
        //im.toString().replace("full/full/0/default.jpg","full/500,/0/default.jpg")
        image(im, windowWidth/2, windowHeight/2);
    }
    
}