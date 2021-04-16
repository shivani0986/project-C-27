
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1300, 800);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(600,200,300,30);
	bob1 = new bob(300,400,50)
	bob2 = new bob(350,400,50)
	bob3 = new bob(400,400,50)
	bob4 = new bob(450,400,50)
	bob5 = new bob(500,400,50)

	rope1=new rope(bob1.body,roofObject.body,-120,0)
	rope2=new rope(bob2.body,roofObject.body,-60,0)
	rope3=new rope(bob3.body,roofObject.body,-0,0)
	rope4=new rope(bob4.body,roofObject.body,60,0)
	rope5=new rope(bob5.body,roofObject.body,120,0)
	Engine.run(engine);	 
}

function draw() {
  rectMode(CENTER);
  background(200);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  stroke("blue");
  fill("pink");
  textSize(30);
  text("Press Left Arrow Key And Right Key To Move The Bob",250,150);
  textSize(40);
  text("*NEWTON CRADLE*",400,100);
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:70,y:-50});
		}
  
	if (keyCode === LEFT_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-50});
	}    
  }




