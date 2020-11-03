class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
   
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
       
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      rect(0, 0, this.width, this.height);
      pop();
      }
        else {
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-2;
          tint(255,this.visibility);
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect( this.body.position.x, this.body.position.y, 30,40);
          pop();
        }
        
    }
    score(){
      console.log("score function")
      if(this.visibility<0 && this.visibility >-102){
        score++;
        console.log(score)
      }
    }
  };
  