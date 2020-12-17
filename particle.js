class Particle{
    constructor(x,y,r){
    var options={
   isStatic:false
}
    this.body = Bodies.circle(x,y,r,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position
    fill("this.color")
    ellipse(pos.x,pos.y,30);
    }   
}    