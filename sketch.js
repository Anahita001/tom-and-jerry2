var BackgroundImage,BG;
var cat,catImg,mouse,mouseImg;
var mouseHappy, catHappy,cat4,mouse4;

function preload() {
    //load the images here
   BackgroundImage = loadImage("images/garden.png");
   catImg = loadImage("images/cat1.png");
   mouseImg = loadImage("images/mouse1.png");
   mouseHappy = loadAnimation("images/mouse2.png","images/mouse3.png");
   catHappy = loadAnimation("images/cat2.png","images/cat3.png");
   cat4 = loadImage("images/cat4.png");
   mouse4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700,1,1);
    cat.addImage(catImg);
    cat.scale=0.1;
    

    mouse = createSprite(100,700,1,1);
    mouse.addImage(mouseImg);
    mouse.scale=0.1;
   
}

function draw() {

    background(BackgroundImage);
     keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width/2 + mouse.width / 2 
        && mouse.x - cat.x < cat.width/2 + mouse.width/2
        && cat.y - mouse.y < cat.height/2 + mouse.height/2
        && mouse.y - cat.y < cat.height/2 + mouse.height/2){
          cat.addImage("catHappy",cat4);
          cat.changeAnimation("catHappy");
          cat.velocityX=0;

          mouse.addImage("happymouse",mouse4);
          mouse.changeAnimation("happymouse");
          mouse.velocityX=0;
        }
   
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseHappy)
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catTeased",catHappy);
        cat.changeAnimation("catTeased");
        cat.velocityX=-3;
    }

    
  //For moving and changing animation write code here


}
