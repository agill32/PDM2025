function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  stroke(0, 0, 0, 0); // red circle
  fill(255, 0, 0, 90);
  circle(400, 275, 450);

  stroke(0, 0, 0, 0); // green circle
  fill(0, 255, 0, 90);
  circle(525, 500, 450);

  stroke(0, 0, 0, 0); //blue circle
  fill(0, 0, 255, 90);
  circle(250, 500, 450);
}
