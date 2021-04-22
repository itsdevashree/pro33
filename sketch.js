const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var bg;
var boy1,boy2,boyImg1,boyImg2;
var slingshot;
var snow = []

function preload(){
  bg = loadImage("snow2.jpg")
  boyImg1 = loadImage("boy1.png")
  boyImg2 = loadImage("boy2.png")

}

function setup() {
  createCanvas(1200,670);
 // createSprite(600,325,20,20)

  engine = Engine.create()
  world = engine.world

  boy1 = createSprite(401,557,20,40);
  boy1.addImage("boy",boyImg1);
  boy1.scale = 0.5;

  boy2 = createSprite(901,557,20,40);
  boy2.addImage("boy",boyImg2)

  slingshot= new SlingShot(snow.body,{x:650,y:150})

}

function draw() {
  background(bg)
  Engine.update(engine)


  if(frameCount%20==0){
    snow.push(new Snowfall(random(100,1100), 10,10));
  }

  for (var j = 0; j < snow.length; j++) { 
    snow[j].display();
  }

  slingshot.display()
  

  drawSprites();
  fill("black")
  text(mouseX + ', ' + mouseY,10,45)
}