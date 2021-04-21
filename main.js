function preload(){
    img_living=loadImage("living_room.jpg");
    img_dining=loadImage("dining_room.jpg");
    img_kitchen=loadImage("kitchen.jpg");
    img_bedroom=loadImage("bedroom.jfif");
    img_bottle=loadImage("bottle.jpg");
    img_stationary=loadImage("stationary.jpg");
}

function setup(){
    canvas=createCanvas(500,450);
    canvas.position(390,100);
}

function draw(){
selection=document.getElementById("my_select").value;
if(selection=="bedroom"){
    image(img_bedroom,0,0,500,450);
    bedroom();
}
if(selection=="living room"){
    image(img_living,0,0,500,450);
     living_room();
}
if(selection=="dining room"){
    image(img_dining,0,0,500,450);
    dining_room();
}

if(selection=="kitchen"){
    image(img_kitchen,0,0,500,450);
    kitchen();
}

if(selection=="bottle"){
    image(img_bottle,0,0,500,450);
    bottle();
}
if(selection=="stationary"){
    image(img_stationary,0,0,500,450);
    pencil_function();
}

}

function bedroom(){
    fill(0,0,0);
    stroke(0,0,0)
    text("bed",160,120);
    text("side table",370,180);
   
    text("coffee table",30,190);

    noFill();
    stroke(255,0,0);
    rect(150,100,250,340);
    rect(370,170,250,200); 
    rect(25,170,150,270); 
}

function living_room(){
    fill(255,255,255);
    stroke(255,255,255)
    text("television",160,120);
    text("table",180,320);
   text("shelf",5,25);

    noFill();
    stroke(255,0,0);
    rect(150,90,250,200);
    rect(150,300,280,100);
   
    rect(1,10,150,420); 
}

function bottle(){
    fill(0,0,0);
    stroke(0,0,0);
    text("bottle",170,40);
    noFill();
    stroke(255,0,0);
    rect(170,30,170,380);
}

function pencil_function(){
    fill(0,0,0);
    stroke(0,0,0);
    text("pencil",50,160);
    noFill();
    stroke(255,0,0);
    rect(35,150,430,80);
}
function dining_room(){
    fill(0,0,0);
    stroke(0,0,0);
    text("chandelier",195,30);
    text("table & chairs",50,270);
    noFill();
    stroke(255,0,0);
    rect(190,20,130,170);
    rect(40,260,450,190);
}

function kitchen(){
    fill(255,255,255);
    stroke(255,255,255);
    text("stove",10,220);
    text("cupboard",120,20);
    fill(0,0,0);
    stroke(0,0,0);
    text("sink",230,180);
    
    noFill();
    stroke(255,0,0);
    rect(5,200,133,95);
    rect(110,10,130,155);
    rect(210,170,133,60);


}

