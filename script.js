// — MILES + VROOM SETUP —
let milesCount = 0;
const counter   = document.getElementById('counter');
const samwellImg = document.querySelector('.pixel-scene img');
const vroomSound = new Audio('assets/sounds/rebel_rev_vroom.mp3');

function updateMiles() {
  counter.textContent = `Miles: ${milesCount}`;
}

samwellImg.style.cursor = "pointer";

samwellImg.addEventListener("click", () => {
  milesCount++;
  vroomSound.currentTime = 0; // Reset sound to start
  vroomSound.play();
  updateMiles();
});

console.log('pixel-poof files loaded 🌟');
