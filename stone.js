class Stone{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1.9,
            density: 1.9,
        }
        this.x=x;
		this.y=y;
        this.r = r;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(this.x, this.y, this.r/2,options);
      
        
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(255,0,255);
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();

    }
}