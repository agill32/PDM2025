
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); // h(), saturation, brightness
  angleMode(DEGREES);

}

function draw() {
  background(255, 30 , 100);

  noStroke();
  fill(0, 0, 50);
  square(100, 100, 500);
  fill(0, 100, 100);
  circle(500, 250, 100); // right eye
  circle(200, 250, 100); //left eye

  arc(350, 450, 300, 100, 0, 180); // mouth


  stroke("blue");
  beginShape();
  vertex(100, 100);
  vertex(150, 50);
  vertex(200, 100);
  vertex(250, 50);
  vertex(300, 100);
  vertex(350, 50);
  vertex(400, 100);
  vertex(450, 50);
  vertex(500, 100);
  vertex(550, 50);
  vertex(600, 100);
  endShape();

  fill(100, 100, 100, 0.5); // overlay
  circle(500, 250, 500, 500)
}
