const CANVAS_SIZE = 800;
const NUMBER_OF_CELLS = 10;
const CELL_SIZE = CANVAS_SIZE / NUMBER_OF_CELLS;
const BACKGROUND_TEXTURES = [];

function preload() {
  // use a loop to load the similarly names images into an array
  for (let i = 1; i <= 4; i++) {
    // backgroundTextures.push(loadImage("images/texture-trans"+i+".png")); // old school concatenation
    BACKGROUND_TEXTURES.push(loadImage(`images/texture-trans${i}.png`)); // ES6 template literal with string interpolation
  }
}

function setup() {
  //create a canvas of 800 x 800 pixels
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);

  // define a background color for the canvas
  background(220);

  // loop through canvas to create grid
  for (let row = 0; row < NUMBER_OF_CELLS; row++) {
    for (let column = 0; column < NUMBER_OF_CELLS; column++) {
      // calculate random color
      const red = random(255);
      const green = random(255);
      const blue = random(255);

      //get a random texture
      const img = random(BACKGROUND_TEXTURES);

      //set tint
      tint(red, green, blue);
      // draw square in correct place with correct size
      image(img, row * CELL_SIZE, column * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}
