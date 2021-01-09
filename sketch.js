const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var ground,division;
var engine,world;
var particles =[];
var plinkos =[];
var divisions=[];
var divisionHeight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground(240,790,480,20);
  for(var k=0;k<=width;k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j =40;j<=width;j=j+50){
   plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }

for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
}


function draw() {
  Engine.update(engine);
  background(0,0,0);  
  ground.display();
  //divisions.push.display();
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  
  for (var j = 0; j < particles.length; j++){
		particles[j].display() 
	}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  //particles[j].display();
}

 // drawSprites();
}