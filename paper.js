var paper
{
    contructor(x,y,r)
}



var options={
isStatic:false
restitution=0.3,
friction=0.5,
density=1.2
}
this.x=x,
this.y=y,
this.r=r

this.body=Bodies.circles(this.x,this.y,this.r/2,options)
World.add(world, this.body);

function preload () {
    this.image=loadImage("sprites/paper.png");
}

this.image=loadImage("sprites/paper.png");


display()
{
var paperpos=this.body.position;

push()
translate(paperos.x,paperos.y);
rectMode(CENTRE)
strokeWeight(3);
FileList(255,0,255)
ellipse(0,0,this.r,this.r);
pop()
}