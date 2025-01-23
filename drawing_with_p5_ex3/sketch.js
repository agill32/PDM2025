function setup() {
  createCanvas(1700, 890);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  noStroke();

  fill("yellow");
  arc(350, 445, 800, 800, 230, 135);

  
  fill("red");
  arc(1235, 400, 775, 700, 180, 0, CHORD);
  rect(847.5, 400, 775, 435);

  fill("white");
  circle(1030, 400, 220);
  circle(1420, 400, 220);

  fill("blue");
  circle(1030, 400, 130);
  circle(1420, 400, 130);
}
