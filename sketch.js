
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(400,350,350,20,"Brown")
	rope = new Rope(400,450,2,200,"Brown")
	rope2 = new Rope(460,450,2,200,"Brown")
	rope3 = new Rope(520,450,2,200,"Brown")
	rope4 = new Rope(340,450,2,200,"Brown")
	rope5 = new Rope(280,450,2,200,"Brown")
	ball= new Ball(400,550,30,"green");
	ball2= new Ball(460,550,30,"green");
	ball3= new Ball(520,550,30,"green");
	ball4= new Ball(340,550,30,"green");
	ball5= new Ball(280,550,30,"green");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2333);
  box.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}



