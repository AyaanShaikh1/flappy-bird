const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg ;
var bg1;
var pole;

function preload() {  
bg1 = loadImage("sprites/bg.png");
g1 = loadImage("sprites/ground.png");
pipe1 = loadImage("sprites/pipe.png");
pipe2 = loadImage("sprites/pipe2.png");
bird1 = loadAnimation("sprites/frame_0.png","sprites/frame_1.png","sprites/frame_2.png","sprites/frame_3.png"
,"sprites/frame_4.png","sprites/frame_5.png","sprites/frame_6.png","sprites/frame_7.png","sprites/frame_8.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(600,200);
    bg.velocityX = -5;
    bg.addImage(bg1);

    ground = createSprite(400,545,600,30);
    ground.addImage(g1);
    ground.velocityX = -5;
    ground.scale = 2;

    bird = createSprite(100,200);
    bird.addAnimation("flying",bird1);
    bird.scale = 0.4 ;


    
}

function draw(){
   
        background(0);


        if(bg.x < 0 ){
            bg.x = 600
        }

        if(ground.x < 0 ){
            ground.x = 400
        }


        if(keyDown("space")){
           bird.velocityY = -1; 
        }
    // gravity
        bird.velocityY += 0.1 
        
    Engine.update(engine);
    
        spawnPoles();

    drawSprites();
}

function  spawnPoles(){
if(frameCount% 150 === 0){
 pole = createSprite(800,random(350,450));
 pole.velocityX = -2;
 pole.addImage(pipe1);

 pole2 = createSprite(800,random(20,70));
pole2.velocityX = -2;
pole2.addImage(pipe2);

ground.depth = pole.depth;
ground.depth += 1;
}

}

