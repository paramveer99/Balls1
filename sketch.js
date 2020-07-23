
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	rect1= Bodies.rectangle(390,690,200,20,   {restitution:1,isStatic:true}   );
	rect2=Bodies.rectangle(280,650,20,100,{isStatic:true});
	rect3=Bodies.rectangle(500,650,20,100,{isStatic:true});
	fill("red");
 
	

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(50,150,20);
	ground1 = new Ground(400,height,800,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  rect(rect1.position.x,rect1.position.y,200,20);
  rect(rect2.position.x,rect2.position.y,20,100);
  rect(rect3.position.x,rect3.position.y,20,100);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});

	}
}



