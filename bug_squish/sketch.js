let GameStates = Object.freeze({
  START: "start",
  PLAY: "play",
  END: "end"
});
let gameState = GameStates.START;
let score = 0;
let time = 30;
let padding = 25
let bug;
let beetle = [];
let speed = 1;
let animation;
let angles = [0, 90, 180, 270];
let num = 50;

function preload()
{ bug = loadImage("bug.png");}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  angleMode(DEGREES);

  for(let i = 0; i < num; i++) {
    beetle[i] = new Bug(random(0, width), random(0, height),
                        speed, random(angles))
    beetle[i].addAnimation("running", new SpriteAnimation(bug, 0, 0, 5) )
    beetle[i].addAnimation("squish", new SpriteAnimation(bug, 5, 0, 1) )
    beetle[i].currentAnimation = "running";
  } 
}

function draw() {
  background(220);

  switch(gameState) {
    case GameStates.START:
      textAlign(CENTER, CENTER);
      textSize(35);
      text("Press ENTER to begin.", width/2, height/2);
      break;
    case GameStates.PLAY:
      textAlign(LEFT, TOP);
      text("Bugs Squished: " + score, padding, padding)
      textAlign(RIGHT, TOP);
      text("Time: " + Math.ceil(time), width - padding, padding);

      for (i = 0; i < num; i++)
        { beetle[i].draw();} 

      time -= deltaTime / 1000;
      if (time <= 0) {
        gameState = GameStates.END;
      }
      break;
    case GameStates.END:
      textAlign(CENTER, CENTER);
      textSize(50);
      text("Game over!", width/2, height/2 - 60);
      text("Final score: " + score, width/2, height/2);
      textSize(50);
      break;
  }
}

function mousePressed()
{ for (i = 0; i < num; i++)
    beetle[i].mousePressed();}

class Bug{
  constructor(x, y, speed, direction){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = speed;
    this.squished = false;
    this.currentAnimation = null;
    this.animations = {};
  }
  
  addAnimation(key, animation) {
    this.animations[key] = animation;
  }
  
   mousePressed()
  { if (mouseX > this.x - 16 && mouseX < this.x + 16 &&
        mouseY > this.y - 16 && mouseY < this.y + 16 &&
        this.squished === false) {
      score++;
      this.squished = true;
      translate(this.x, this.y);
      speed += 0.25;
      this.currentAnimation = "squish";
    }
}

  draw() {
    if (this.currentAnimation == "running") {
      switch(this.direction){
        case 0:
          this.y -= speed;
          break;
        case 90:
          this.x += speed;
          break;
        case 180:
          this.y += speed;
          break;
        case 270:
          this.x -= speed;
          break;
      }
      push();
      translate(this.x, this.y);
      rotate(this.direction);
      this.animations[this.currentAnimation].draw();
      pop();
     }
     else if (this.currentAnimation == "squish")
     { push();
      translate(this.x, this.y);
      rotate(this.direction);
      this.animations[this.currentAnimation].draw();
      pop();
    }
    
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0)
    { switch(this.direction){
      case 0:
        this.y = height;
        break;
      case 90:
        this.x = 0;
        break;
      case 180:
        this.y = 0;
        break;
      case 270:
        this.x = width;
        break;
      }
    }
  }
}

function keyPressed() {
  switch (gameState) {
    case GameStates.START:
      if (keyCode === ENTER)
        { gameState = GameStates.PLAY; }
      break;
      case GameStates.PLAY:
        break;
      case GameStates.END:
        break;
  }
}

class SpriteAnimation {
  constructor(spritesheet, startU, startV, duration) {
    this.spritesheet = spritesheet;
    this.u = startU;
    this.v = startV;
    this.duration = duration;
    this.startU = startU;
    this.frameCount = 0;
    this.rotate = 0;
  }

  draw() {
    image(this.spritesheet, 0, 0, 32, 32, this.u * 32, this.v * 32, 32, 32);
    this.frameCount++;
    if (this.frameCount % 5 === 0)
      { this.u++;
      if (this.u === this.startU + this.duration)
        { this.u = this.startU;}
      }
  }
}
