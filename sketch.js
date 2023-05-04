var box;

function setup() {
  createCanvas(600,400);
  box = createSprite(300,200,50,50)
}

function draw() 
{
  background(30);
drawSprites();
if (keyIsDown(RIGHT_ARROW) ){
  box.position.x +=5
}
if (keyIsDown(LEFT_ARROW) ){
  box.position.x -=5
}
if (keyIsDown(UP_ARROW) ){
  box.position.y -=5
}
if (keyIsDown(DOWN_ARROW) ){
  box.position.y +=5
}

}




