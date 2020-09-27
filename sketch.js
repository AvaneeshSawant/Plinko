const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 770, 480, 20);

}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  for(var k =0; k<= 480; k=k+80) {
    divisions.push(new Ground(k, divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= 480; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 10));
  }

  for(var j = 15; j <= 470; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 10));
  }

  if(frameCount % 90 === 0) {
    particles.push(new Particle(random(230, 250), 10, 10));
  }

  for(var j = 0; j < particles.length; j ++) {
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k ++) {
    divisions[k].display();
  }

  for(var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }
}