const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground,ball;




function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,400,20,ground_options);
  World.add(myWorld,ground);


  var ball_options = {
    restitution:1
  }


  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);
  //console.log(ball);
}

function draw() {
  background(0);  

  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


  
}