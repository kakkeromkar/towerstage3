const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);

  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);

  box9 = new Box(390,155,30,40);

  box11 = new Box(640,175,30,40);
  box12 = new Box(670,175,30,40);
  box13 = new Box(700,175,30,40);
  box14 = new Box(730,175,30,40);
  box15 = new Box(760,175,30,40);

  box16 = new Box(670,135,30,40);
  box17 = new Box(700,135,30,40);
  box18 = new Box(730,135,30,40);

  box19 = new Box(700,95,30,40);
  //stand1 = new Stand(390,300,250,10);
  //stand2 = new Stand(700,200,200,10);
 
 
  //ball holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display(); 

   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display(); 

   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   
   box11.score();
   box12.score();
   box13.score();
   box14.score();
   box15.score();
   box16.score();
   box17.score();
   box18.score();
   box19.score();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  text("SCORE:"+score,750,40);
  
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}

function keyPressed() {
if (keyCode === 32) {
slingShot.attach(this.polygon); 
}
}
