let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let interval;

const restartState = () => {
  clearInterval(interval);
  pause.classList.add("hide-timer__controls--icon");
  play.classList.remove("hide-timer__controls--icon");
  console.log("count restart");

  if (pomodoro.checked === true) {
    minutes.textContent = 25;
    seconds.textContent = `0${0}`;
  }
  if (shortBreak.checked === true) {
    minutes.textContent = `0${5}`;
    seconds.textContent = `0${0}`;
  }
  if (longBreak.checked === true) {
    minutes.textContent = 15;
    seconds.textContent = `0${0}`;
  }
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
    }, 10);
  }
  if (Number(minutes.textContent) < 0) {
    clearInterval(interval);
    pause.classList.add("hide-timer__controls--icon");
    play.classList.remove("hide-timer__controls--icon");
  }
  play.classList.add("hide-timer__controls--icon");
  pause.classList.remove("hide-timer__controls--icon");
};

const pauseCount = () => {
  clearInterval(interval);
  pause.classList.add("hide-timer__controls--icon");
  play.classList.remove("hide-timer__controls--icon");
};

const nextState = () => {
  console.log("next state");
};

restart.addEventListener("click", restartState);
play.addEventListener("click", playCount);
pause.addEventListener("click", pauseCount);
next.addEventListener("click", nextState);
