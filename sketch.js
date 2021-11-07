var player;
var catImg, dogImg;

function preaload(){
catImg=loadImage("images/Cat.png");
dogImg=loadImage("images/Dog.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
  //createSprite(400, 200, 50, 50)
  player=new Player()
}
function draw() {
  background(255,255,255);
  text(mouseX + ","+mouseY,mouseX,mouseY)  
player.display()
}