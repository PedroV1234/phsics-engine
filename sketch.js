const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options ={
    isStatic:true
  }
ground = Bodies.rectangle(200,390,400,20,options);
World.add(world, ground);

var options ={
  restitution:1.2
}
ball = Bodies.circle(200,100,25,options);
World.add(world, ball);
}

function draw() {
  background(45,55,25); 
Engine.update(engine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,25,25)
}

