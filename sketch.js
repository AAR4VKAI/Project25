
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObj, groundObj
var World

function preload() {

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(200,450,40);
    groundnObj=new ground(width/2,670,width,20);
	//Create the Bodies Here.

	var render = Render.create({
	elemen: document.body, engine:engine,
	options: {
		width:1200,
		height:700,
		wireframes: false
	}


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

paperObj.display();
groundObj.display();
dustbinObj.display();
