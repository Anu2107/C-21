var fixedRect, movingRect;
var obj1, obj2; 
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 100, 80, 30);
  movingRect.shapeColor="blue";
  //movingRect.velocityY = 2; 
  fixedRect=createSprite(400,300,50,80);
  fixedRect.shapeColor="yellow";
  //fixedRect.velocityY = -2; 
  obj1 = createSprite(600, 300, 50, 80); 
  obj1.shapeColor = "yellow"; 
  obj1.velocityY = 2; 
  obj2 = createSprite(600, 500, 50, 80); 
  obj2.shapeColor = "yellow"; 
  obj2.velocityY = -2; 
}

function draw() {
  background(0,0,0);
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if (detectCollision(movingRect, obj1)){
    movingRect.shapeColor="red";
  }
 else{
  movingRect.shapeColor="blue";
 }

 BounceOff(obj1, obj2); 

  drawSprites();
}

