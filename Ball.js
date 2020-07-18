class Ball{
  constructor(x, y){
    var options ={
      isStatic:false,
      restitution:0.5,
      friction:0.5,
      density:1.2
    }
    this.body = Bodies.circle(x, y, 20, options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    fill("red");
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 20);
  }
};