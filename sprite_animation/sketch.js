let spelunky;
let green;
let purple;
let animation;

function preload()
{ spelunky = loadImage("SpelunkyGuy.png");
  green = loadImage("Green.png");
  purple = loadImage("purple.png");
}


function setup() {
  createCanvas(400, 400);
  imageMode(CENTER); 

  character = new Character(random(80, width-80), random(80, height-80));
  character.addAnimation("up", new SpriteAnimation(spelunky, 0, 5, 6));
  character.addAnimation("down", new SpriteAnimation(spelunky, 6, 5, 6));
  character.addAnimation("right", new SpriteAnimation(spelunky, 0, 0, 8));
  character.addAnimation("left", new SpriteAnimation(spelunky, 0, 0, 9));
  character.addAnimation("idle", new SpriteAnimation(spelunky, 0, 0, 1));
  character.currentAnimation = "idle";

  character2 = new Character(random(80, width-80), random(80, height-80));
  character2.addAnimation("up", new SpriteAnimation(green, 0, 5, 6));
  character2.addAnimation("down", new SpriteAnimation(green, 6, 5, 6));
  character2.addAnimation("right", new SpriteAnimation(green, 0, 0, 9));
  character2.addAnimation("left", new SpriteAnimation(green, 0, 0, 9));
  character2.addAnimation("idle", new SpriteAnimation(green, 0, 0, 1));
  character2.currentAnimation = "idle";

  character3 = new Character(random(80, width-80), random(80, height-80));
  character3.addAnimation("up", new SpriteAnimation(purple, 0, 5, 6));
  character3.addAnimation("down", new SpriteAnimation(purple, 6, 5, 6));
  character3.addAnimation("right", new SpriteAnimation(purple, 0, 0, 9));
  character3.addAnimation("left", new SpriteAnimation(purple, 0, 0, 9));
  character3.addAnimation("idle", new SpriteAnimation(purple, 0, 0, 1));
  character3.currentAnimation = "idle";

}

function draw() {
  background(220);

  character.draw();
  character2.draw();
  character3.draw();
}

function keyPressed() {
  character.keyPressed();
  character2.keyPressed();
  character3.keyPressed();
}

function keyReleased(){
  character.keyReleased();
  character2.keyReleased();
  character3.keyReleased();
}

class Character{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.currentAnimation = null;
    this.animations = {};
  }

  addAnimation(key, animation) {
    this.animations[key] = animation;
  }

  draw(){
    let animation = this.animations[this.currentAnimation];
    if (animation)
    { switch (this.currentAnimation) {
      case "up":
        this.y -= 2;
        break;
      case "down":
        this.y += 2;
        break;
      case "right":
        this.x += 2;
        break;
      case "left":
        this.x -= 2;
        break;

    } 
      push();
      translate(this.x, this.y);
      animation.draw();
      pop();}
  }

   keyPressed(){
    switch(keyCode) {
      case UP_ARROW:
        character.currentAnimation = "up";
        character2.currentAnimation = "up";
        character3.currentAnimation = "up";
        break;
      case DOWN_ARROW:
        character.currentAnimation = "down";
        character2.currentAnimation = "down";
        character3.currentAnimation = "down";
        break;
      case RIGHT_ARROW:
        character.currentAnimation = "right";
        character2.currentAnimation = "right";
        character3.currentAnimation = "right";
        break;
      case LEFT_ARROW:
        character.currentAnimation = "left";
        character2.currentAnimation = "left";
        character3.currentAnimation = "left";

        this.animations[this.currentAnimation].flipped = true;
        break;
    }
  }
  
   keyReleased(){
    if (this.currentAnimation === "left") {
      character.currentAnimation = "idle";
      character2.currentAnimation = "idle";
      character3.currentAnimation = "idle";

      this.animations[this.currentAnimation].flipped = true;
    }
    else {
      character.currentAnimation = "idle";
      character2.currentAnimation = "idle";
      character3.currentAnimation = "idle";

      this.animations[this.currentAnimation].flipped = false;
    }
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
    this.flipped = false; //for left walking
   }

   draw() {
    let s = (this.flipped) ? -1 : 1; //-1 if true, 1 if false

    scale(s, 1);

    image(this.spritesheet, 0, 0, 80, 80, this.u * 80, this.v * 80, 80, 80);

    this.frameCount++;
    if (this.frameCount % 5 === 0)
      { this.u++;
      if (this.u === this.startU + this.duration)
        { this.u = this.startU;}
      }
  }  
}



