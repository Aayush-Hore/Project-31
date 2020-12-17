class Ball{
    constructor(x,y,r){
    var options={
   isStatic:true
}
    this.body = Bodies.circle(x,y,30,options);
    this.w = width
    this.h = height
    World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position
    fill("white")
    ellipse(pos.x,pos.y,30);
    }   
}    