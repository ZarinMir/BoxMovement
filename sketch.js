function preload()
{

}


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,50);
  box2 = createSprite(200,100,40,30);
}

function draw() 
{
  background(30);


  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 4;
   
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 4;
   
  }
  
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 4;
   
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 4;
   
  }

  drawSprites();

}




