var tower,toweri;
var door,doori,doorsGroup;
var climber,climberi,climbersGroup;
var ghost,ghosti;
var gameState="play";
function preload(){
  toweri=loadImage("tower.png");
  
  doori=loadImage("door.png");
  doorsGroup=new Group();
  
  climberi=loadImage("climber.png");
  climbersGroup=new Group();
  
  ghosti=loadImage("ghost-standing.png")
}
function setup(){
createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",toweri);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghosti);
  ghost.scale=0.3;
  
  
}
function draw(){
  if(gameState==="play"){
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("up_arrow")){
    ghost.velocityY=-5;
  }
   if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
   if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if(ghost.y>598){
    ghost.destroy();
    gameState="end";
  }
  spawnDoors();
  drawSprites();
  }
  if(gameState==="end"){
    background("red");
    stroke("yellow");
    textSize(100);
    text("gameover",130,250);
  }
}
function spawnDoors(){
  if(frameCount%240===0){
     var door=createSprite(200,-50);
    door.addImage("door",doori);
     var climber=createSprite(200,10);
    climber.addImage("climber",climberi);
    door.velocityY=1;
    door.x=Math.round(random(120,400));
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    climbersGroup.add(climber);
    door.lifetime=800;
    doorsGroup.add(door);
    ghost.depth=door.depth;
    ghost.depth++;
     }

}