let drawColor = "black";
let drawSize = 10;

function setup() {
  createCanvas(1250, 800);
  background(240);
}

function mouseDragged() {
  if (mouseX > 50)
    { strokeWeight(drawSize);
      stroke(drawColor);
      line(pmouseX, pmouseY, mouseX, mouseY); }
  }

function draw() {
  strokeWeight(5);
  stroke("black");
  fill("red");
  square(0, 0, 50);
  fill("orange");
  square(0, 50, 50);
  fill("yellow");
  square(0, 100, 50);
  fill("green");
  square(0, 150, 50);
  fill("cyan");
  square(0, 200, 50);
  fill("blue");
  square(0, 250, 50);
  fill("magenta");
  square(0, 300, 50);
  fill("pink");
  square(0, 350, 50);
  fill("brown");
  square(0, 400, 50);
  fill("white");
  square(0, 450, 50);
  fill("black");
  square(0, 500, 50);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50)
  { drawColor = "red";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 51 && mouseY < 100)
  { drawColor = "orange";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 101 && mouseY < 150)
  { drawColor = "yellow";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 151 && mouseY < 200)
  { drawColor = "green";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 201 && mouseY < 250)
  { drawColor = "cyan";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 251 && mouseY < 300)
  { drawColor = "blue";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 301 && mouseY < 350)
  { drawColor = "magenta";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 351 && mouseY < 400)
  { drawColor = "pink";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 401 && mouseY < 450)
  { drawColor = "brown";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 451 && mouseY < 500)
  { drawColor = "white";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 501 && mouseY < 550)
  { drawColor = "black";}
}