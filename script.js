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
// — 🎧 MUSIC TILE SETUP —
const playTile = document.getElementById('play-music');
const hitMyHeart = document.getElementById('hit-my-heart');

playTile.style.cursor = "pointer";

playTile.addEventListener('click', () => {
  hitMyHeart.currentTime = 0;
  hitMyHeart.play();
});

console.log('pixel-poof files loaded 🌟');
