class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,20, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      imageMode(CENTER);
      fill(200,200,0);
      image(this.image, 0, 0,50,50);
      pop();
    }
  };