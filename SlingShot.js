class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 20
        }
        this.pontB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
   }
   fly(){
       this.sling.bodya = null;

   }

   display(){
       if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;

           strokeWeight(4);
           fill("red");
           line(pointA.x, pointA.y, pointB.x,pointB.y)
       }
   }
}