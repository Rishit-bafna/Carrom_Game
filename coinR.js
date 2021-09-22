class coinR{
    constructor(x,y){
        var options = { 
            isStatic : true,
            
        }
       this.x = x;
       this.y = y;
       this.image = loadImage("carrom_red.png");
       this.coins = Bodies.circle(this.x,this.y,40,options);
       World.add(world,this.coins)
    }
    display(){
        var pos = this.coins.position;
        //ellipse(pos.x,pos.y,40,40);
        //ellipseMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        imageMode(CENTER);
    }
}