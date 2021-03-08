var canvas;
var music;
var box;
var redSurface;
var blueSurface;
var greenSurface;
var yellowSurface;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redSurface=createSprite(100,580,190,20);

    blueSurface=createSprite(300,580,190,20);

    greenSurface=createSprite(500,580,190,20);

    yellowSurface=createSprite(700,580,190,20);

    //create box sprite and give velocity
    box=createSprite(Math.round(random(20,750)),120,20,20);
    box.velocityX=1;
    box.velocityY=1;
}

function draw() {
    background("black");
    //create edgeSprite

    //add condition to check if box touching surface and make it box
    if(redSurface.isTouching(box) && box.bounceOff(redSurface)){
        box.shapeColor="red"

    }
    if(blueSurface.isTouching(box) && box.bounceOff(blueSurface)){
        box.shapeColor="blue"

    }
    if(greenSurface.isTouching(box) && box.bounceOff(greenSurface)){
        box.shapeColor="green"
    }
    if(yellowSurface.isTouching(box) && box.bounceOff(yellowSurface)){
        box.shapeColor="yellow"
    }
    box.shapeColor="white"
    redSurface.shapeColor="red"
    blueSurface.shapeColor="blue"
    greenSurface.shapeColor="green"
    yellowSurface.shapeColor="yellow"
    createEdgeSprites(800,600);
    drawSprites()
    box.bounceOff(edges);
    box.bounceOff(blueSurface)
    box.bounceOff(redSurface)
    box.bounceOff(greenSurface)
    box.bounceOff(yellowSurface)
}
