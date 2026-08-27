// Live "REC" timecode — counts up from page load, like a running camera
const clockEl = document.getElementById('clock');
let seconds = 0;
function tick(){
  seconds++;
  const h = String(Math.floor(seconds/3600)).padStart(2,'0');
  const m = String(Math.floor((seconds%3600)/60)).padStart(2,'0');
  const s = String(seconds%60).padStart(2,'0');
  clockEl.textContent = `${h}:${m}:${s}`;
}
setInterval(tick, 1000);

// Reveal frames on scroll
