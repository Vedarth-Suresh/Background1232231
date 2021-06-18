
var button1;
var button2;
var button3;

var r = 0;
var g = 0;
var b = 0;



function setup() {
  createCanvas(400, 400);

 button1 = createButton("RED");
 button1.position(100,50);
 button1.mousePressed(red_bg);

 
button2 = createButton("GREEN");
button2.position(250,50);
button2.mousePressed(green_bg);

button3 = createButton("BLUE");
button3.position(175,150);
button3.mousePressed(blue_bg);

}


function draw() {
 background(r,g,b);
 

}

function red_bg()
{
 r = 255;
 g = 0;
 b = 0;
 
}

function green_bg()
{
 r = 0;
 g = 255;
 b = 0;
 
}

function blue_bg()
{
 r = 0;
 g = 0;
 b = 255;
 
}


  










