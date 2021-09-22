class stricker{
    constructor(x,y){
        var options={
        //isStatic:true,
        }
       this.x = x;
       this.y = y;
       this.image= loadImage("carrom_stricker.png");
       this.body = Bodies.circle(x,y,10,options);
       World.add(world,this.body);

    }
  

    display(){
        push();
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,100,100);
        pop();

    }
    
}