const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var computerArrow;
var playerArrow

function setup() {
  canvas = createCanvas(windowWidth, 600);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  Pbow = new PlayerBow(
    width - 1010,
    playerBase.body.position.y - 180,
    120,
    120,
    180
  );

 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  Cbow = new ComputerBow(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120,
    360
  );
  playerArrow = new PlayerArrow
  (width-1010, 
  playerBase.body.position.y - 180,
  60,
  15)

  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  
 Pbow.display()
 Cbow.display()


playerArrow.display()

     
}


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  function keyReleased(){
  if(keyCode === 32){
   playerArrow.shoot()

    
  }
  }



