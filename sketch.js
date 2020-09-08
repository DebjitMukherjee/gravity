const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    restitution:1.1
  }
  object=Bodies.rectangle(400,200,50,50,options);
  World.add(world,object);
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);  
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,20)


}