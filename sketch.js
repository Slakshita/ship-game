var ship , ship1 , edges;
var seaImg;
var sea

function preload(){
seaImg = loadImage("sea.png");
ship1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  edges = createEdgeSprites();
  // creating ship sprite
  ship = createSprite(50,160,20,50);
  ship.addAnimation("ship",ship1);
  ship.scale = 0.5;
  
  sea = createSprite(50,160,20,50);
  sea.addImage(seaImg);
}

function draw() {
  background("blue");
 
  // code to set backgroung
  if(sea.x < 100){
  sea.x = sea.width/2;
  }
   ship.collide(sea);
  drawSprites();
}