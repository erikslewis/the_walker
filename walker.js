var info = document.getElementById("info")
var walker = document.getElementById('walker')

walker.addEventListener("click", function(){

  var request = new XMLHttpRequest();
  request.open('GET', "http://api.icndb.com/jokes/random");
  request.onload = function(){
var ourData = JSON.parse(request.responseText);
info.innerHTML= ourData.value.joke;
console.log(ourData);
};
request.send();
});








var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 10;
var xPos = rightBorder;


function update() {

  if(walkingLeft){
    xPos -= speed;
  } else {
    xPos += speed;
  }

  walker.style.left = xPos + "px";


  if (xPos < leftBorder || xPos > rightBorder) {

    walker.classList.toggle("flip");
    walkingLeft = !walkingLeft;
  }
};


setInterval(update, 100);



walker.addEventListener('click', function() {
  walker.classList.toggle("flip");
  walkingLeft = !walkingLeft;
});


window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});
