let body = document.body;
let button = document.querySelector(".colorMode");
let modeText = document.querySelector(".mode-text");
let borderedElement = document.getElementById("bordered");

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  
  if (body.classList.contains("light")) {
    modeText.textContent = "Light Mode";
    document.getElementById("imageid").src="../../img/biscuit.png";
  } else {
    modeText.textContent = "Dark Mode";
    document.getElementById("imageid").src="../../img/biscuit-white.png";
  }
}

button.addEventListener("click", turnOnLight);