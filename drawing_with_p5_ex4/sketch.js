function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 0, 100);

  stroke(255, 255, 255);
  strokeWeight(7);

  fill(0, 100, 0);
  circle(400, 400, 400);

  fill(255, 0, 0);
  beginShape();
  vertex(400, 195); 
  vertex(450, 330); //1st line
  vertex(600, 330); 
  vertex(490, 410);
  vertex(550, 540);
  vertex(400, 460);
  vertex(250, 540);
  vertex(310, 410);
  vertex(200, 330);
  vertex(350, 330);
  vertex(400, 195);



  endShape();

}
