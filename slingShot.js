class SlingShot{
    constructor(bodyA,pointB){
       var options={
         bodyA:bodyA,
         pointB:pointB,
         stiffness:1.2,
         lenght:2
       }
 
       this.sling = Constraint.create(options)
       this.pointB = pointB
       World.add(world,this.sling)
   }

    display(){
 
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
   }
}