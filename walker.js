let info = document.getElementById("info")
let walker = document.getElementById('walker')

walker.addEventListener("click", function(){

  let request = new XMLHttpRequest();
  request.open('GET', "http://api.icndb.com/jokes/random");
  request.onload = function(){
let ourData = JSON.parse(request.responseText);
info.innerHTML= ourData.value.joke;
console.log(ourData);
};
request.send();
});



let walkingLeft = true;
let leftBorder = 0;
let rightBorder = window.innerWidth - walker.offsetWidth;
let speed = 10;
let xPos = rightBorder;


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
