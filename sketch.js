const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, bgImg
var chin, chinIMG

function preload(){
  bgImg = loadImage("snow2.jpg");
  chinIMG = loadAnimation("Remove background (1).png","Remove background.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(10,10,10,10);

  bg = createSprite(400,200);
  bg.addImage("bg",bgImg);
  
  chin = createSprite(200,250,10,10);
  chin.addAnimation("chinImg",chinIMG);
  chin.scale = 0.15;

 
}

function draw() {
  background(255,255,255); 
    snow.display();
  drawSprites();
}