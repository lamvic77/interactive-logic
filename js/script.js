// Keep track of which part of the story we are on
let currentScene = "start";


// Show one option depending on where the mouse is
window.addEventListener("mousemove", function (event) {

  let cX = event.clientX;

  let boxL = document.getElementById("box-left");
  let boxC = document.getElementById("box-center");
  let boxR = document.getElementById("box-right");

  if (cX < 400) {

    boxL.style.visibility = "visible";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";

  } else if (cX >= 400 && cX < 800) {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "visible";
    boxR.style.visibility = "hidden";

  } else if (cX >= 800 && cX < 1200) {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "visible";

  } else {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";
  }
});


// FOREST
document.getElementById("forest-image").addEventListener("click", function () {

  currentScene = "forest";

  document.body.style.backgroundImage = "url('pics/forest2.jpg')";

  document.querySelector("h1").innerHTML = "The Mysterious Forest";
  document.querySelector("body > p").innerHTML = "What should Kitty look at?";

  document.getElementById("forest-image").src = "pics/mushroom.jpg";
  document.getElementById("house-image").src = "pics/river.jpg";
  document.getElementById("beach-image").src = "pics/trees.jpg";
});


// HOUSE
document.getElementById("house-image").addEventListener("click", function () {

  currentScene = "house";

  document.body.style.backgroundImage = "url('pics/house2.jpg')";

  document.querySelector("h1").innerHTML = "The Pink House";
  document.querySelector("body > p").innerHTML = "What should Kitty eat?";

  document.getElementById("forest-image").src = "pics/cake.jpg";
  document.getElementById("house-image").src = "pics/brownies.jpg";
  document.getElementById("beach-image").src = "pics/cookies.jpg";
});


// BEACH
document.getElementById("beach-image").addEventListener("click", function () {

  currentScene = "beach";

  document.body.style.backgroundImage = "url('pics/beach2.jpg')";

  document.querySelector("h1").innerHTML = "The Sunny Beach";
  document.querySelector("body > p").innerHTML = "What should Kitty do?";

  document.getElementById("forest-image").src = "pics/swim.jpg";
  document.getElementById("house-image").src = "pics/shell.jpg";
  document.getElementById("beach-image").src = "pics/boat.jpg";
});