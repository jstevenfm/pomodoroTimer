const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let interval;

const restartState = () => {
  console.log("count restart");
};

const playCount = () => {
  if (Number(minutes.textContent) >= 0) {
    interval = setInterval(() => {
      seconds.textContent = Number(seconds.textContent) - 1;

      if (Number(seconds.textContent) < 0) {
        seconds.textContent = 59;
        minutes.textContent = Number(minutes.textContent) - 1;
      }
      if (Number(seconds.textContent) <= 9) {
        seconds.textContent = `0${seconds.textContent}`;
      }
      if (Number(minutes.textContent) <= 9) {
        minutes.textContent = `0${Number(minutes.textContent)}`;
      }
    }, 1000);
  }
  if (Number(minutes.textContent) < 0) {
    clearInterval(interval);
  }
  play.classList.add('hide-timer__controls--icon');
  pause.classList.remove('hide-timer__controls--icon');
};


const pauseCount = () => {
  console.log("restart state");
  clearInterval(interval);
  interval = null;
  
  pause.classList.add('hide-timer__controls--icon');
  play.classList.remove('hide-timer__controls--icon');
};

const nextState = () => {
  console.log("count stop");
};

restart.addEventListener("click", restartState);
play.addEventListener("click", playCount);
pause.addEventListener("click", pauseCount);
next.addEventListener("click", nextState);

