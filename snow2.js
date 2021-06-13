class snow2 {
    constructor(x,y,r){

        var options = {
            restitution: 0.4
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("snow5.webp");
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }





display() {
    var pos= this.body.position;
    var angle= this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
    pop();
}
}
