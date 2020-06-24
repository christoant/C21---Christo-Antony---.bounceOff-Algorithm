var movingrect, fixedrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  movingrect = createSprite(200,200,40,40);
  movingrect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }

  else{
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }

  drawSprites();
}