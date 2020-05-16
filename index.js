
var randInt1 = Math.floor(Math.random()*6)+1;
var randInt2 = Math.floor(Math.random()*6)+1;

var ply1 = prompt("Enter the name of player 1: ");
var ply2 = prompt("Enter the name of player 2: ");

document.querySelector(".p1").innerHTML = ply1;
document.querySelector(".p2").innerHTML = ply2;

document.querySelector('.img1').setAttribute("src", "images/dice"+randInt1+".png");
document.querySelector('.img2').setAttribute("src", "images/dice"+randInt2+".png");

if(randInt1 > randInt2){
  document.querySelector("h1").innerHTML = "The Winner is <i>"+ ply1+"</i><br>kudos! 🏆🎉";
}else if(randInt1 < randInt2){
  document.querySelector("h1").innerHTML = "The Winner is <i>"+ ply2+"</i><br>kudos! 🏆🎉";
}else{
  document.querySelector("h1").innerHTML = "It is a tie ! 😬";
}
