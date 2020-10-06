var database;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


function setup() {
  engine = Engine.create();
  world = engine.world;
  
  database = firebase.database();

  createCanvas(800,900);

  form = new Form();
}

function draw() {
  Engine.update(engine);
  //background(255,255,255); 
  form.display();
  drawSprites();
}