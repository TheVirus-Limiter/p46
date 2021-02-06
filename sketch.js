var gameState = BEGIN;
var PLAY = 2
var BEGIN = 1
var WIN = 0
var man
var manAnimation
var bird
var birdImg
var birdpoop
var birdpoopImg
var bus
var busImg
var office
var bckd 
var ground1
var ground2
var ground3
var bground, bgroundImage, trafficone,trafficoneImg;


function preload(){
    manAnimation = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man9.png");
    bgroundImage = loadImage("road_bground.png");
    busImg = loadImage("bus.png")
    trafficoneImg = loadImage("trafficone.png")


}

function setup(){
    createCanvas(windowWidth-400, 400);
    console.log(width)

    bground = createSprite((width-400)/2, 200)
    bground.addImage("bground", bgroundImage);
    bground.scale = 1.2;
    bground.velocityX = -2

    man = createSprite(50,250);
    man.addAnimation("man", manAnimation); 
    man.mirrorX(man.mirrorX() * -1); 

    bus = createSprite(width-50, 250);
    bus.addImage(busImg);

    
    
}

function draw(){
    background(0);

    if(bground.x<330){
       bground.x = 536;
    }

    //man.x = mouseX;
    //man.y = mouseY;
    drawSprites();
}

function spawnEnemies(){
    if (frameCount%100 === 0){
        trafficone = createSprite(width/2, height-100);
        trafficone.addImage(trafficoneImg);
        trafficone.velocityX = -2;
        trafficone.lifetime = (width/2)/(-trafficone.velocityX);
        trafficone.y = Math.round(random())
    }

}