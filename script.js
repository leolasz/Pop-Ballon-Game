var x = 0;
function addball() {
    var ball = document.createElement("div");
    ball.setAttribute("class", "ball");
    var p1 = Math.floor(Math.random()*900);
    var p2 = Math.floor(Math.random()*400)+30;
    var setcolor = Math.floor(Math.random()*16777215).toString(16);
    ball.setAttribute("style", "left:"+p1+"px; top:"+p2+"px; background-color:#"+setcolor+";");
    ball.setAttribute("onclick", "burst(this)");
    document.body.appendChild(ball); 
}
function burst(object) {
 document.body.removeChild(object);
 x = x + 1;
 document.getElementById("result").innerHTML = "";
 document.getElementById("result").innerHTML = "You burst "+ x +" ball(s).";
}
function start() {
 setInterval(addball, 1000);
}
function stop() {
 window.location.href = window.location.href;
}