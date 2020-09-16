var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
// var posx = helicopterSprite.x;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var opt3 = {
		isStatic:true,
		'friction':1.0,
		'density':0.5,
		'mass':2.0

	}
	var opt = {
		isStatic:true,
		'friction':1.0,
		'density':0.5,
		'mass':2.0

	}
	var opt2 = {
		isStatic:true,
		'friction':1.0,
		'density':0.5,
		'mass':2.0
	}
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = Bodies.rectangle(0,380,800,50);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	fill("red");

	box3 = Bodies.rectangle(500,630,20,50,opt3);

	box2 = Bodies.rectangle(400,655,50,20,opt2);

	box1 = Bodies.rectangle(300,630,20,50,opt);
	World.add(world,box1);
	World.add(world,box2);
	World.add(world,box3);


	

	//Create a Ground
	fill ("white");
	ground = Bodies.rectangle(400, 690, 800, 50 , {isStatic:true});
	 World.add(world, ground);
	


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);

  rect(box1.x,box1.y,box1.width,box1.height);
  rect(box1.x,box1.y,box1.width,box1.height);
  rect(box1.x,box1.y,box1.width,box1.height);



  background(0);
  Engine.update(engine);



  rect(ground.position.x,ground.position.y,800,50);

  fill("red");

  rect(box2.position.x,box2.position.y,200,20);
  rect(box1.position.x,box1.position.y,20,70);
  rect(box3.position.x,box3.position.y,20,70);


  	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false); 

}
}



