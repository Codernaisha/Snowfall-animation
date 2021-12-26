class Snow{
  constructor(x, y, width, height){
      var options = {
          'restitution':1,
          'friction':1,
          'density':1,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage('snow5.webp');
      World.add(world, this.body);
  }
  
   display(){
       var angle = this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       imageMode(CENTER);
       this.image(this.image,0,0,this.width,this.height);
       pop();

   }

}