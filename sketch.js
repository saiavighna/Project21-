var bullet,wall;
var speed,weigth;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random (55,90)
  weight = random (400,1500)
  bullet = createSprite(50,200,50,50)
  wall= createSprite (2200,200,thickness,height/2);
  bullet.velocityX = speed;
  speed=random(223,321)
  weight=random()
}
var thickness;
thickness=random (22,83)
function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallleftEdge=walll.x;
  if(bulletRightEdge>=wallleftEdge)
  {
    return true
  }
  return false
}

function draw() {
  background("Pink"); 
  if(wall.x-car.x < (car.width+wall.width)/2) 
  {
    bullet.velocityX = 0;
    vardeformation =0.5 *weight * speed * speed/22509;
    if (deformation>180)
  
  {
    bullet.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation > 100)
  {
    bullet.shapeColor = color (230,230,0);
  }
  if (deformation < 100)
  {
    bullet.shapeColor=color (0,255,0);
  }
}
  drawSprites();
}