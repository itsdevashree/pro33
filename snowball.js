class SnowBall{
    constructor(x,y,radius){
      var options={
        restitution:0.2,
        density:1,
        frictionAir:0.005
      }
  
      this.snow = Bodies.circle(x,y,radius,options)
      this.radius = radius;
      this.image = loadImage("snowBall.png");
      World.add(world,this.snow)
  
    }display(){
      var pos = this.body.position
      var angle = this.body.angle
  
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius)
      imageMode(CENTER);
      image(this.image, 0,0,this.radius*2, this.radius*2)
      pop()

    }
  }