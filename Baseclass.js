class Baseclass{
    constructor(x,y,width,height,angle){
       var options = {
           'restitution':0.6,
           'density':1,
           'friction':5
          }
        this.width = width;
        this.height = width;  

       this.body = Bodies.rectangle(x,y,this.width,this.height,options)
       this.image=loadImage("sprites/base.png");
   World.add(world,this.body)
    }
   display(){
      
   var angle = this.body.angle
   push();
   translate(this.body.position.x,this.body.position.y)
   angleMode(RADIANS)
   rotate(angle)
   imageMode(CENTER)
   image(this.image,0,0,this.width,this.height);
   
   pop();
   }
   }