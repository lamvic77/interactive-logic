let currentScene = "start";
function hideButtons() {
  document.getElementById("box-left").style.display = "none";
  document.getElementById("box-center").style.display = "none";
  document.getElementById("box-right").style.display = "none";
}

// SHOW ONE BOX DEPENDING ON MOUSE POSITION
window.addEventListener("mousemove", function (event) {

  let cX = event.clientX;
  let screenWidth = window.innerWidth;

  let boxL = document.getElementById("box-left");
  let boxC = document.getElementById("box-center");
  let boxR = document.getElementById("box-right");

  if (cX < screenWidth / 3) {

    boxL.style.visibility = "visible";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";

  } else if (cX < (screenWidth * 2) / 3) {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "visible";
    boxR.style.visibility = "hidden";

  } else {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "visible";
  }
});

// BACK BUTTON
document.getElementById("back-button").addEventListener("click", function () {

  // Go back from a final choice to its path
  if (["mushroom", "river", "trees"].includes(currentScene)) {
    currentScene = "forest";
    document.body.style.backgroundImage = "url('pics/forest2.jpg')";
    document.getElementById("heading-text").innerHTML = "The Mysterious Forest";
    document.querySelector("body > p").innerHTML = "What should Kitty look at?";

    document.getElementById("forest-image").src = "pics/mushroom.jpg";
    document.getElementById("house-image").src = "pics/river.jpg";
    document.getElementById("beach-image").src = "pics/trees.jpg";
  }

  else if (["cake", "brownies", "cookies"].includes(currentScene)) {
    currentScene = "house";
    document.body.style.backgroundImage = "url('pics/house2.jpg')";
    document.getElementById("heading-text").innerHTML = "The Pink House";
    document.querySelector("body > p").innerHTML = "What should Kitty eat?";

    document.getElementById("forest-image").src = "pics/cake.jpg";
    document.getElementById("house-image").src = "pics/brownies.jpg";
    document.getElementById("beach-image").src = "pics/cookies.jpg";
  }

  else if (["swim", "shell", "boat"].includes(currentScene)) {
    currentScene = "beach";
    document.body.style.backgroundImage = "url('pics/beach2.jpg')";
    document.getElementById("heading-text").innerHTML = "The Sunny Beach";
    document.querySelector("body > p").innerHTML = "What should Kitty do?";

    document.getElementById("forest-image").src = "pics/swim.jpg";
    document.getElementById("house-image").src = "pics/shell.jpg";
    document.getElementById("beach-image").src = "pics/boat.jpg";
  }

  // Go back from a path to the start
  else if (["forest", "house", "beach"].includes(currentScene)) {
    currentScene = "start";
    document.body.style.backgroundImage = "url('pics/background.jpg')";
    document.getElementById("heading-text").innerHTML = "Kitty's Adventure";
    document.querySelector("body > p").innerHTML = "Where should Kitty go next?";

    document.getElementById("forest-image").src = "pics/forest.jpg";
    document.getElementById("house-image").src = "pics/house.jpg";
    document.getElementById("beach-image").src = "pics/beach.jpg";
  }

  else {
    return;
  }

  // Restore the boxes after going back
  document.getElementById("box-left").style.display = "block";
  document.getElementById("box-center").style.display = "block";
  document.getElementById("box-right").style.display = "block";

  // Reset visibility so the hover effect can choose a box again
  document.getElementById("box-left").style.visibility = "hidden";
  document.getElementById("box-center").style.visibility = "hidden";
  document.getElementById("box-right").style.visibility = "hidden";
});









// LEFT BOX
document.getElementById("forest-image").addEventListener("click", function () {

  if (currentScene == "start") {

    currentScene = "forest";

    document.body.style.backgroundImage = "url('pics/forest2.jpg')";

    document.getElementById("heading-text").innerHTML = "The Mysterious Forest";
    document.querySelector("body > p").innerHTML = "What should Kitty look at?";

    document.getElementById("forest-image").src = "pics/mushroom.jpg";
    document.getElementById("house-image").src = "pics/river.jpg";
    document.getElementById("beach-image").src = "pics/trees.jpg";

  } else if (currentScene == "forest") {

    currentScene = "mushroom";

    document.body.style.backgroundImage = "url('pics/mushroom2.jpg')";

    document.getElementById("heading-text").innerHTML = "The Mysterious Mushroom";
    document.querySelector("body > p").innerHTML = "Kitty discovers a strange mushroom!";
      hideButtons();


  } else if (currentScene == "house") {

    currentScene = "cake";

    document.body.style.backgroundImage = "url('pics/cake2.jpg')";

    document.getElementById("heading-text").innerHTML = "A Delicious Cake";
    document.querySelector("body > p").innerHTML = "Kitty couldn't finish the cake!";
      hideButtons();


  } else if (currentScene == "beach") {

    currentScene = "swim";

    document.body.style.backgroundImage = "url('pics/swim2.jpg')";

    document.getElementById("heading-text").innerHTML = "Swimming at the Beach";
    document.querySelector("body > p").innerHTML = "Kitty loves going for a swim!";
      hideButtons();

  }
});


// MIDDLE BOX
document.getElementById("house-image").addEventListener("click", function () {

  if (currentScene == "start") {

    currentScene = "house";

    document.body.style.backgroundImage = "url('pics/house2.jpg')";

    document.getElementById("heading-text").innerHTML = "The Pink House";
    document.querySelector("body > p").innerHTML = "What should Kitty eat?";

    document.getElementById("forest-image").src = "pics/cake.jpg";
    document.getElementById("house-image").src = "pics/brownies.jpg";
    document.getElementById("beach-image").src = "pics/cookies.jpg";

  } else if (currentScene == "forest") {

    currentScene = "river";

    document.body.style.backgroundImage = "url('pics/river2.jpg')";

    document.getElementById("heading-text").innerHTML = "The Peaceful River";
    document.querySelector("body > p").innerHTML = "Kitty discovers a beautiful opening!";
      hideButtons();


  } else if (currentScene == "house") {

    currentScene = "brownies";

    document.body.style.backgroundImage = "url('pics/brownies2.jpg')";

    document.getElementById("heading-text").innerHTML = "Brownie Time";
    document.querySelector("body > p").innerHTML = "Kitty devoured all the brownies!";
      hideButtons();


  } else if (currentScene == "beach") {

    currentScene = "shell";

    document.body.style.backgroundImage = "url('pics/shell2.jpg')";

    document.getElementById("heading-text").innerHTML = "A Pretty Shell";
    document.querySelector("body > p").innerHTML = "Kitty collects a bunch of beautiful shell!";
      hideButtons();

  }
});


// RIGHT BOX
document.getElementById("beach-image").addEventListener("click", function () {

  if (currentScene == "start") {

    currentScene = "beach";

    document.body.style.backgroundImage = "url('pics/beach2.jpg')";

    document.getElementById("heading-text").innerHTML = "The Sunny Beach";
    document.querySelector("body > p").innerHTML = "What should Kitty do?";

    document.getElementById("forest-image").src = "pics/swim.jpg";
    document.getElementById("house-image").src = "pics/shell.jpg";
    document.getElementById("beach-image").src = "pics/boat.jpg";

  } else if (currentScene == "forest") {

    currentScene = "trees";

    document.body.style.backgroundImage = "url('pics/trees2.jpg')";

    document.getElementById("heading-text").innerHTML = "Deep in the Forest";
    document.querySelector("body > p").innerHTML = "Kitty looks up at the tall trees!";
      hideButtons();


  } else if (currentScene == "house") {

    currentScene = "cookies";

    document.body.style.backgroundImage = "url('pics/cookies2.jpg')";

    document.getElementById("heading-text").innerHTML = "Fresh Cookies";
    document.querySelector("body > p").innerHTML = "Kitty tries all of the freshly baked cookies!";
      hideButtons();


  } else if (currentScene == "beach") {

    currentScene = "boat";

    document.body.style.backgroundImage = "url('pics/boat2.jpg')";

    document.getElementById("heading-text").innerHTML = "A Boat Adventure";
    document.querySelector("body > p").innerHTML = "Kitty takes a ride on boat!";
      hideButtons();
  }


















});