
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pfundo, fundo;

function preLoad(){
  fundo = loadImage("fundo.jpg");
}


function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(fundo,800,800);
  Engine.update(engine);
  
}

