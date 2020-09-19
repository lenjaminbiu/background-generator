var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradientColor(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradientColor)

color2.addEventListener("input", setGradientColor)

setGradientColor()
css.textContent = body.style.background + ";"


//randomize 

var button = document.getElementById("randomize");

function getRandomColor() {
  var characters = "0123456789ABCDEF";
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += characters[getRandomNumber(0, 15)];
  }
  
  return color;
}

function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

function RandomColor(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradientColor();
}

button.addEventListener("click", RandomColor);