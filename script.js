const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

const lapList = document.getElementById("laplist");

/// stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  startButton.disabled = true;
}

function stopTimer() {}

function pauseTimer() {
  clearInterval(interval);
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  resetTimerData();
  resetTimerData.disabled = true;
}

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    //// 1000 -> 1 second = 1000 milliseconds
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  displayTimer();
}

function displayTimer() {
  millisecondsLabel.textContent = padTime(milliseconds);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function resetTimerData() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTimer();
}
