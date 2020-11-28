class Bob{
    // there should be difference of 160
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 7.8
        }
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var r = this.r;
        push ()
        translate(pos.x, pos.y);
        strokeWeight(3);
        fill ("blue");
        stroke(3);
        ellipse(0, 0, r, r);
        pop ()
    }
}