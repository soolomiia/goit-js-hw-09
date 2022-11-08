const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let currentColor;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function startNewColor() {
 currentColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
 }, 1000);
 startButton.disabled = true;
 stopButton.disabled = false;
}
function stopNewColor() {
    startButton.disabled = false;
    clearInterval(currentColor)
}

startButton.addEventListener('click', startNewColor);
stopButton.addEventListener('click', stopNewColor);