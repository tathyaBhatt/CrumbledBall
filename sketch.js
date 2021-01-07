
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1, log2, log3, ground, ball;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 500)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log(windowWidth-200, height-55, 200, 20);
	log2 = new Log(windowWidth-300, height-95, 20, 100);
	log3 = new Log(windowWidth-100, height-95, 20, 100);
	ground = new Log(690, 465, windowWidth, 20);
	ball= new Ball(300, 300, 50);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  log1.display();
  log2.display();
  log3.display();
  ground.display()
  ball.display();
  keyPressed();
  drawSprites();
 
}



function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball.body, ball.body.position,{x: 20,y:-30})
	}
}
