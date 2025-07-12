// script.js

// — MILES + VROOM SETUP —
let milesCount = 0;
const counter   = document.getElementById('counter');
const samwellImg = document.querySelector('.pixel-scene img');
const vroomSound = new Audio('assets/sounds/rebel_rev_vroom.mp3');

function updateMiles() {
  counter.textContent = `Miles: ${milesCount}`;
}

samwellImg.style.cursor = 'pointer';
samwellImg.addEventListener('click', () => {
  milesCount++;
  vroomSound.currentTime = 0;
  vroomSound.play();
  updateMiles();
});

// — SIMPLE BING-BING PLAYER ON 🎧 TILE —
const playTile = document.getElementById('play-music');
const bingAudio = document.getElementById('bing-audio');

playTile.style.cursor = 'pointer';
playTile.addEventListener('click', () => {
  bingAudio.currentTime = 0;
  bingAudio.play();
});

console.log('pixel-poof files loaded 🌟');
