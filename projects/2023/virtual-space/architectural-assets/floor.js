//import { move } from "../utils/interaction";

let bg = "#FC6939";
let fg = "#FE943F";
let MAGNITUDE = 10000;
let cameraZ = 0;

function setup() {
  let width = window.innerWidth;
  //let width = 1080;
  let height = window.innerHeight;
  //let height = 1900;
  createCanvas(width, height, WEBGL);
}

function draw() {
  background(bg);

  perspective(PI / 3.0, width / height, 1, 100000);

  let tilesX = 100; // number of grid
  let tilesY = 100; // same as X to have an equal grid

  let tilesW = MAGNITUDE / tilesX;
  let tilesH = MAGNITUDE / tilesY;

  fill(fg);
  noStroke();

  translate(-width / 2, -height / 2 + 200, cameraZ); // add 200 (to lower the floor)

  //cameraZ = frameCount;
  // matrix around grid
  push();

  translate(width / 2, height / 2); // translate the whole grid so if we rotate it (to create the floor) it happens in the middle.
  rotateX(radians(90)); // angle of the camera

  // create grid
  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      push();
      //translate
      translate(tilesW * x - MAGNITUDE / 2, tilesH * y - MAGNITUDE / 2);
      box(5);
      pop();
    }
  }

  pop();

  if (keyIsPressed === true) {
    move();
  }
}
