function eleMaker (name){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    document.body.querySelector(".main").appendChild(ele);
}
var irondmg=6;
var spiderdmg=4;
var capdmg=5;
var stardmg=3;
var totaldmg=0;

document.body.querySelector(".clicker").addEventListener("click", function (){
    
    eleMaker("I am Iron Man. " );
    eleMaker(totaldmg=totaldmg+irondmg);
    
});

document.body.querySelector(".clicker2").addEventListener("click", function (){
   
    eleMaker("Who am I? I'm Spiderman!");
    eleMaker(totaldmg=totaldmg+spiderdmg);
});
   
document.body.querySelector(".clicker3").addEventListener("click", function (){
    
    eleMaker("Language!");
    eleMaker(totaldmg=totaldmg+capdmg);
});

document.body.querySelector(".clicker4").addEventListener("click", function (){
   
    eleMaker("Where's Gamora?!");
    eleMaker(totaldmg=totaldmg+stardmg);
});

document.body.querySelector(".clicker5").addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    totaldmg=0
});