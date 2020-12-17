const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World= Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;






function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,390,800,10);
}

function draw() {
  background("grey");  
  Engine.update(engine);
  for(var k = 0;k<=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
      }
  ground.display();
 
  
}
