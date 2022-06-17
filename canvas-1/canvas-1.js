var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(300, 300);
ctx.stroke();

var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");
ctx2.beginPath();
ctx2.arc(150, 150, 150, 0, 2 * Math.PI);
ctx2.stroke();  

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.font = "30px Arial";
ctx3.fillText("Hello World", 100,100);