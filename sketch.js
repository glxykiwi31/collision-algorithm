var object2,movingRect,rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="blue";
  
  movingRect=createSprite(200,200,80,50)
  movingRect.shapeColor="blue";

  rect1=createSprite(100,100,50,50)
  rect1.shapeColor="green";

  rect2=createSprite(200,100,50,50)
  rect2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);

 
  
  if (isTouching(movingRect,rect2)) {
    rect2.shapeColor="red";
   movingRect.shapeColor="red";
  } else {
    rect2.shapeColor="green";
    movingRect.shapeColor="blue";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<(object1.width+object2.width)/2 && object2.x-object1.x<(object1.width+object2.width)/2 
  && object1.y-object2.y<(object1.height+object2.height)/2 && object2.y-object1.y<(object1.height+object2.height)/2 ){
    return true
    
  }
  else{
      return false
  }
}