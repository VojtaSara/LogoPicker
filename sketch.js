function setup() {
  createCanvas(800,800);
  background(120);
}
let colorPickerBG, colorPickerBALL;
let img;
let button;
function preload(){
  img = loadImage('colorTemplate.png');
  colorPickerBG = createColorPicker('#ed225d');
  colorPickerBG.position(800, 360);
  colorPickerBALL = createColorPicker('#00de00');
  colorPickerBALL.position(800, 400);
  button = createButton('stáhnout screenshot');
  button.position(800, 440);
  button.mousePressed(downloadPNG);
}

function draw() {
  background(colorPickerBG.color());
  fill(colorPickerBALL.color())
  ellipse(400,300,110,110);
  image(img,0,0,800,800);
}

function downloadPNG() {
  saveCanvas('myCanvas', 'png');
}
