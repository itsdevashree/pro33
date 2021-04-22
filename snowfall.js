class Snowfall{
    constructor(x,y,radius){
      var options={
        restitution:0.2,
      }
     
      this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius
      this.image = loadImage("snowBall.png");
      World.add(world,this.body)
  
    }
    display(){
  
       var pos = this.body.position;
       var angle = this.body.angle;
  
       push();
       translate(pos.x, pos.y);
       rotate(angle)
       strokeWeight(3)
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius);
       imageMode(CENTER);
       image(this.image, 0,0,this.radius*2, this.radius*2)
       pop();

    }
  
  }