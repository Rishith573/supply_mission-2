var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redZone1, redZone2, redZone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redZone1 = createSprite(width/2, height-55, 200, 30);
	redZone1.shapeColor = color("red");

	redZone2 = createSprite(width-300, height-90, 30, 100);
	redZone2.shapeColor = color("red");

	redZone3 = createSprite(width-500, height-90, 30, 100);
	redZone3.shapeColor = color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	redZone1 = Bodies.rectangle(width/2, height-55, 200, 30, 
	{isStatic:true});
	World.add(world, redZone1);

	redZone2 = Bodies.rectangle(width-300, height-90, 30, 100, 
	{isStatic:true});
	World.add(world, redZone2);

	redZone3 = Bodies.rectangle(width-500, height-90, 30, 100, 
	{isStatic:true});
	World.add(world, redZone3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
	

    
  }
}



