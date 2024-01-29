const CANVAS_SIZE = 800;
const BACKGROUND_COLOR = 238;
const NUMBER_OF_CELLS = 10;
const CELL_SIZE = CANVAS_SIZE / NUMBER_OF_CELLS;

function preload() {}

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

      // set color as the fill color
      fill(red, green, blue);
      // draw square in correct place with correct size
      rect(row * CELL_SIZE, column * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}
