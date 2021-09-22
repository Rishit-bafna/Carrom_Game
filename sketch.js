const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9;
var wh1,wh2,wh3,wh4,wh5,wh6,wh7,wh8,wh9;;
var r1,coins,stricker1,stricker_I;
var btn1,btn1I;

function preload(){
bg = loadImage("carrom.jpg");
stricker_I = loadImage("carrom_stricker.png");
btn1I = loadImage("up.png");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(displayWidth,displayHeight);

//btn1=createImage('up.png');
//btn1.x=100;
//btn1.y=100;
//btn1.width=1000;
//btn1.height = 1000;
//btn1.mouseClicked(hForce);

//btn1 = createSprite(100,100,50,50);
//btn1.addImage(btn1I);
//btn1.scale=0.1;


r1 = new coinR(750,400,40,40);

wh1=new coinW(755,355,40,40);

wh2=new coinW(755,305,40,40);

wh3=new coinW(680,460,40,40);

wh4=new coinW(715,430,40,40);

wh5=new coinW(790,430,40,40);

wh6=new coinW(820,460,40,40);

wh7=new coinW(665,355,40,40);

wh8=new coinW(835,355,40,40);

wh9=new coinW(755,510,40,40);


bl1=new coinB(795,380,40,40);

bl2=new coinB(710,380,40,40);

bl3=new coinB(755,450,40,40);

bl4=new coinB(715,490,40,40);

bl5=new coinB(790,490,40,40);

bl6=new coinB(465,430,10,10);

bl7=new coinB(425,510,10,10);

bl8=new coinB(545,430,10,10);

bl9=new coinB(835,410,40,40);

stricker1 = new stricker(400,700);

btn1 = new shooter(stricker1.body,{x:400, y:700});

}
function draw(){
    Engine.update(engine);
    background(bg,displayWidth-200,displayHeight);



    drawSprites();
    r1.display();

    stricker1.display();
  // image(stricker_I,stricker1.position.x,stricker1.position.y,100,100)

    wh1.display();
    wh2.display();
    wh3.display();
    wh4.display();
    wh5.display();
    wh6.display();
    wh7.display();
    wh8.display();
    wh9.display();

    bl1.display();
    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
    bl9.display();

    btn1.display();
}
//function hForce(){
  //  Matter.Body.applyForce(this.body,{x:0,y:0},{x:0.05,y:0});
    //}
   
    //function keyPressed(){
      //  if (keyCode === UP_ARROW) { Matter.Body.applyForce(stricker1,{x:0,y:0},{x:0.05,y:0})} 
    //}
    function mouseDragged(){
      Matter.Body.setPosition(stricker1.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
      btn1.fly();
      stricker1.isStatic=false;
  }