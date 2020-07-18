const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, box1, box2, box3, ball;
var Canvas;
function setup(){
  Canvas = createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options ={
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:1.2
  }
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world,ball);

  box1 = new Blocks(900,height-72,10,100);
  box2 = new Blocks(1050,height-72,10,100);
  box3 = new Blocks(975,height-17,160,10);
  ground = new Ground(width/2, height-5, width, 15);
}

function draw(){
  background("black");
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}