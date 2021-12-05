var towerImg,tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.5;
  doorsGroup=new Group();
  climbersGroup=new Group();
}

    function draw() {
    background(0);
 if(gameState==="play"){
   spookySound.play();
  if(tower.y > 400){
    tower.y = 300
   }
  ghost.velocityY=ghost.velocityY + 0.5; 
  if(keyDown("space")){
   ghost.velocityY=-1;
 }
 if(keyDown("right")){
 ghost.velocityX=1; 
 }
 if(keyDown("left")){
 ghost.velocityX=-1; 
 }
 if(doorsGroup.isTouching(ghost) || ghost.y>600){
  ghost.destroy();
  tower.destroy();
  doorsGroup.destroyEach();
  climbersGroup.destroyEach();
gameState="end";

 }
 spawnDoor();
 }
  
  if(gameState==="end"){
    textSize(40);
  text("GAME OVER",200,300);
  
  }

    drawSprites();
 }  
 
 function spawnDoor(){
  if(frameCount%250===0){
  
 door=createSprite(200,10);
 door.addImage("door",doorImg);
 door.velocityY=1;
 door.lifetime=625;
 door.x=Math.round(random(100,500))
doorsGroup.add(door);

 climber=createSprite(door.x,door.y+50);
 climber.addImage("climber",climberImg);
 climber.velocityY=1;
 climber.lifetime=625;
climbersGroup.add(climber);

 door.depth=ghost.depth 
 ghost.depth=ghost.depth+1;
 
  }
}