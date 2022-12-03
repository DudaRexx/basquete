
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var cesta;
var chao;
var bolaImg;

function preload(){

  cesta = loadImage("cesta.png");
  bolaImg = loadImage("bola.png");

}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  bola = Bodies.circle(100,100,20);
  World.add(world,bola);

  chao = Bodies.rectangle(200,390,400,20,{isStatic: true});
  World.add(world,chao);

  
}


function draw() {
  background(10);
  Engine.update(engine);
  
  image(cesta,300,80,100,300);
  
  push();
  imageMode(CENTER);
  image(bolaImg,bola.position.x,bola.position.y,40,40);
  pop();

  text (mouseX + "," + mouseY, mouseX, mouseY); 
  
  rectMode(CENTER);
  noFill();
  stroke("white");
  rect(chao.position.x,chao.position.y,400,20);


}

function keyPressed(){

  if (keyCode === 87){

    Matter.Body.applyForce(bola,{x: 0, y: 0},{x: 0.02, y: -0.07});

  }

}