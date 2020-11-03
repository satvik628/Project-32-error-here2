class Rock
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
			//this.smokeImage=loadImage("smoke.png")
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		//this.trajectory=[];

	}
	attach(body){
        this.sling.bodyA = body;
    }
	display()
	{
			
			var paperpos=this.body.position;		
			//if(this.body.position.x>240&&this.body.speed>10){
				//var pos=[this.body.position.x,this.body.position.y];
				
				//this.trajectory.push(pos);
				//}
				//for(var i=0;i<this.trajectory.length;i++){
			
				 // image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
			
				//}
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
