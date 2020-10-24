const CANVAS_WIDTH = 5300;
const CANVAS_HEIGHT = 300;
let girl;
let girlAnim;
let level;
let numLevels;
let bg;

function preload() {
  const girlSpritesheet = loadSpriteSheet("img/girl.png", 150, 150, 13);
  girlAnim = loadAnimation(girlSpritesheet);
  girl = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 150, 150);
  girl.moveSpeed = 4;
    //load the background image
bg = loadImage ("img/scene.png");
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  girl.addAnimation("move", girlAnim);
  girl.addImage("still", loadImage("img/girl_still.png"));
  girl.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  girl.limitSpeed(girl.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(bg);
  update(girl);
}
