var ground,player;
function setup() {

  createCanvas(1000, 500);
  ground=createSprite(500,450,1000,30);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.shapeColor="green"

  player=createSprite(200,20,20,60);
  player.shapeColor="red"
  
}

function draw() {
  background("black");

  // infinite scrolling of ground
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

// gravity for player
  if(keyDown("space")) {
    player.velocityY = -10;  
   }  
  player.velocityY = player.velocityY + 0.8;

  player.collide(ground)
  drawSprites();
}
