class Paper
{
    constructor(x,y,radius,options)
    {
          var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
      
        this.body=Bodies.circle(x,y,this.body.radius,options);
        this.body.radius=radius
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
      
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.body.radius);
        
    }

}