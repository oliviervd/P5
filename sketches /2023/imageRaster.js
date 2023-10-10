// fetch random image from API Design Museum Gent 
// https://data.designmuseumgent.be/random-image?limit=1

async function fetchImage(PURL) {
    const _res = await fetch(PURL)
    const data = await _res.json()
    return data
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    fetchImage("https://data.designmuseumgent.be/id/random-image?limit=1").then(
    data=>img=loadImage(data[0])
)}

function draw() {
    image(img, 0, 0)
}