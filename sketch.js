//creating sprites
var PLAY=1;
var END=0;
var gameState=PLAY;
var car,oppositeCars,oppositeCarsGroup,oppositeCars1,oppositeCars2,OppositeCars3,s;
var road,score;
var gameOver,reset;

function preload()
 {
 //preloading the animations
 roadImage=loadImage("983695.jpg");
 carImage=loadImage("images-removebg-preview (1).png");
 oppositeCarsImage1=loadImage("cartoon-monster-truck-available-eps-separated-groups-layers-transparency-effects-one-click-repaint-cartoon-monster-140466184-removebg-preview.png");
 oppositeCarsImage2=loadImage("download-removebg-preview (2).png");
 oppositeCarsImage3=loadImage("images-removebg-preview (2).png");
 gameOverImage=loadImage("gameOver.png")
  
  
 }

function setup() 
 {
  
 createCanvas(1200,440); 
 
 //creating road 
  road=createSprite(100,200);
  road.addImage("road",roadImage); 
  road.velocityX=-5;
  road.scale=2.0; 

 //creating car
  car=createSprite(135,200,1000,200);
  car.addImage("car",carImage); 
  car.scale=1.1;  
 
 //creating score
  score=0; 

 //creating oppositeCarsGroup  
  oppositeCarsGroup=new Group(); 
 
  //creating gameOver 
  gameOver=createSprite(300,200,20,20);
  gameOver.addImage("gameOver",gameOverImage);
  gameOver.scale=0.8;
  gameOver.visible=false;
 }

function draw() 
 {
 //adding code to PLAY state 
  if(gameState==PLAY)
 { 
 
  car.y=World.mouseY;
  score=score+Math.round(getFrameRate()/50);
  
   
  if(road.x < 0 )
 {
  road.x = width/2;
 }
  
  oppositeCars(); 
 
 if(car.isTouching(oppositeCarsGroup))
 {
  gameState=END;
 }  
   
 }else
   
 //adding code to END state
  if(gameState==END)
 {
  car.destroy();
  oppositeCarsGroup.destroyEach();
  road.velocityX=0;
  gameOver.visible=true;
  
  textSize(15);
  fill(255);
  text("press up arrow to restart the game!",350,200)
  if(keyDown("UP_ARROW"))
 {
  reset();
 }
 }
  
  drawSprites();
   
 //display score
  textSize(20);
  fill(255);
  text("score: "+score,480,50); 
  
 }
 //creating oppositeCars function
function oppositeCars()
 {
 if(frameCount % 100==0)
 {
var                                                        oppositeCars=createSprite(1000,Math.round(random(50,250))); 
  
var s=Math.round(random(1,4));
  
  if(s==1)
 {
 oppositeCars.addImage("oppositeCars",oppositeCarsImage2);}else
 { 
 oppositeCars.addImage("oppositeCars",oppositeCarsImage3);
 }
  oppositeCars.scale=1.0;
  oppositeCars.lifetime=170;
  oppositeCars.velocityX=-(5+2*score/150); 
  oppositeCarsGroup.add(oppositeCars);
  
 }
 }

 //creating reset function
  function reset()
 {
   gameState=PLAY;
   gameOver.visible=false;
   score=0;
   road.velocityX = -(5+2*score/100);
   car = createSprite(135,200,20,20);
   car.addImage("car",carImage);
   car.scale=1.1;

 }