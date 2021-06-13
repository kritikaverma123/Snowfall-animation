var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particles2=[];
var bg;
function preload(){
   bg= loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
}

function draw(){
  background(bg);
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new snow1(random(width/2-30,width/2+30),10,10));

}

for(var h = 0;h < particles.length; h++){
  particles[h].display();
}
if(frameCount%60===0){
  particles2.push(new snow2(random(width/2-30,width/2+30),10,10));

}

for(var h = 0;h < particles2.length; h++){
particles2[h].display();
}
}


