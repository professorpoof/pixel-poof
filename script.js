let count = 0;
const counter = document.getElementById("counter");
const samwellImg = document.querySelector(".pixel-scene img");

// load the click sound
const clickSound = new Audio("assets/sounds/rebel_rev_vroom.mp3");

samwellImg.style.cursor = "pointer";

samwellImg.addEventListener("click", () => {
  count++;
  counter.textContent = "Miles: " + count;

  // play the vroom
  clickSound.currentTime = 0;
  clickSound.play();
  
  console.log("Image clicked! Miles now:", count);
});

console.log("pixel-poof activated 🌟");
