class dustbin extends BaseClass {
    constructor(x,y)
    super(x,y,50,50);

    function preload (){
        this.image=loadImage("sprites/dustbin.png");
    }
   

    display(){
        this.body.position.x.mouseX;
        this.body.position.y.mouseY;

        super display();


    }
} 