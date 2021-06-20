const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg;
var hr,sec,time;
var datetime


var bg ="sunrise1.png";

function preload() {
    getBackgroundImg()

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add
    getBackgroundImg()


    Engine.update(engine);

    // write code to display time in correct format here
    if(sec>=36&&sec<=59){
        var timeline = 60-sec
        textSize(50)
        strokeWeight(5)
        stroke("yellow")
        fill("blue")
        text(`'PLEASE WAIT FOR
                '`+timeline,350,330)
    }
    if(getBackgroundImg){
        textSize(30)
        strokeWeight(2)
        stroke("yellow")
fill("white")
    text("Current Time:"+time,50,650)
    }
if(sec>=00&&sec<=02)
{
    strokeWeight(4)
    fill("white")
    stroke(236, 112, 99)

    text("AT 5:55 AM          APPROX",100,100)
}
if(sec>=03&&sec<=05)
{
    strokeWeight(4)
    fill("white")
    stroke(187, 143, 206 )
    text("AT 6:00 AM          APPROX",100,100)
}
if(sec>=06&&sec<=08)
{
    strokeWeight(4)

    stroke(133, 193, 233 )
    fill("white")
    text("AT 6:10 AM          APPROX",100,100)
}
if(sec>=09&&sec<=11)
{
    strokeWeight(4)
    
    stroke( 118, 215, 196)
    fill("white")
    text("AT 7:00 AM          APPROX",100,100)
}
if(sec>=12&&sec<=14)
{
    strokeWeight(4)
    stroke( 130, 224, 170)
    fill("white")
    text("AT 3:00 PM          APPROX",100,100)
}
if(sec>=15&&sec<=17)
{
    strokeWeight(4)
    stroke( 247, 220, 111)
    fill("white")
    text("AT 4:00 PM          APPROX",100,100)
}
if(sec>=18&&sec<=20)
{
    strokeWeight(4)
    stroke( 248, 196, 113)
    fill("white")
    text("AT 6:00 PM          APPROX",100,100)
}
if(sec>=21&&sec<=23)
{
    strokeWeight(4)
    stroke( 230, 126, 34)
    fill("white")
    text("AT 6:10 PM          APPROX",100,100)
}
if(sec>=24&&sec<=26)
{
    strokeWeight(4)
    stroke(231, 76, 60 )
    fill("white")
    text("AT 6:10 PM          APPROX",100,100)
}
if(sec>=27&&sec<=29)
{
    strokeWeight(4)
    stroke( 88, 214, 141)
    fill("white")
    text("AT 6:30 PM - 7:00 PM         APPROX",100,100)
}
if(sec>=30&&sec<=32)
{
    strokeWeight(4)
    stroke( 174, 214, 241)
    fill("white")
    text("AT 7:00 PM - 8:00 PM          APPROX",100,100)
}
if(sec>=33&&sec<=35)
{
    strokeWeight(4)
    stroke( 235, 237, 239)
    fill("white")
    text("AT 9:00 PM - 5:00 AM         APPROX",100,100)
}

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responce=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var resJSON=await responce.json()
    var datetime=resJSON.datetime
        //change the data in JSON format
    hr=datetime.slice(11,13)
     sec=datetime.slice(17,19)
     time=datetime.slice(11,19)
    //textSize(20)
       // text("time:"+time,50,650)
    

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
if(sec>=00&&sec<=02){
    bg="sunrise1.png"
}else if(sec>=03&&sec<=05){
    bg="sunrise2.png"
}else if(sec>=06&&sec<=07){
    bg="sunrise3.png"
}else if(sec>=08&&sec<=10){
    bg="sunrise4.png"
}else if(sec>=11&&sec<=13){
    bg="sunrise5.png"
}else if(sec>=14&&sec<=16) {
    bg="sunrise6.png"
}else if(sec>=17&&sec<=19){
    bg="sunset7.png"
}else if(sec>=20&&sec<=22){
    bg="sunset8.png"
}else if(sec>=23&&sec<=25){
    bg="sunset9.png"
}else if(sec>=26&&sec<=28){
    bg="sunset10.png"
}else if(sec>=29&&sec<=31){
    bg="sunset11.png"
}else if(sec>=32&&sec<=35){
    bg="sunset12.png"
}else{
    bg="PRAISYWHITE.png"
    
}
backgroundImg=loadImage(bg)
    //load the image in backgroundImg variable here
console.log(sec)
}
