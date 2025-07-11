let count = 0;
const counter = document.getElementById("counter");
const samwellImg = document.querySelector(".pixel-scene img");

samwellImg.style.cursor = "pointer";

samwellImg.addEventListener("click", () => {
  count++;
  counter.textContent = "Miles: " + count;
});

console.log("pixel-poof activated 🌟");
