const Engine = Matter.Engine;
const   World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var engine,world;
function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
 ground = new Ground(width/2,790,3000,20);
 platform = new Ground(900,415,500,20);
 hero = new Hero(200,100,300,200);
 
  monster = new Monster(900,70,200,200);

 rope = new Fly(hero.body,{x:200, y:50});
    // layer 1
    block1 = new Block(900,400)
    block2 = new Block(870,400); 
    block3 = new Block(840,400);
    block4= new Block(810,400);
    block5= new Block(780,400);
    block6=new Block(930,400);
    block7 = new Block(960,400);
    block8 = new Block(990,400);
    block9 = new Block(1020,400);
    // layer2
    block10 = new Block(810,360);
    block11 = new Block(840,360);
    block12 = new Block(870,360);
    block13 = new Block(900,360);
    block14=new Block(930,360);
    block15 = new Block(960,360);
    block16=new Block(990,360);
    // layer3
    block17 = new Block(870,320);
    block18 = new Block(900,320);
    block19=new Block(930,320);
    //top
    block20 = new Block(900,280);
}

function draw() {
  
  background(bg);
  
  Engine.update(engine);
ground.display();
hero.display();
monster.display();
rope.display();
  //layer 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  //layer2
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //layer3
  block17.display();
  block18.display();
  block19.display();
  
  //top
  block20.display();  
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}
