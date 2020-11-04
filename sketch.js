var car , deformation, wall,speed,weight,bullet,thickness,bulletRightEdge,wallLeftEdge,damage,hasCollided



function setup() {
  createCanvas(1600,400);
  speed =random(223,321)
weight =random(30,50)
thickness =random(22,83)

bullet = createSprite(50,200,60,10);
bullet.shapeColor=color(255)
  wall = createSprite(1500,200,thickness,height/2);

}

function draw() {
  background(0); 
  bullet.velocityX = speed;
  
  

  
if(hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)
if(damage > 10){

  wall.shapeColor=color(255,0,0)
}

if(damage < 10){

  wall.shapeColor=color(0,255,0)
}


}










  drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge =bullet.x + bullet.width
wallLeftEdge = wall.x
if(bulletRightEdge >=wallLeftEdge){

  return true
}
return false
}
