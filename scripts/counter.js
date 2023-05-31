let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let interval;
let counterPomodoro = 0;

const restartState = () => {
  clearInterval(interval);
  pause.classList.add("hide-timer__controls--icon");
  play.classList.remove("hide-timer__controls--icon");

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
      if (Number(minutes.textContent) <= 9 && Number(minutes.textContent) >= 0) {
        minutes.textContent = `0${Number(minutes.textContent)}`;
      }
      if (Number(minutes.textContent) < 0) {
        restartState();
        if (pomodoro.checked === true) {
          counterPomodoro++;
        }
        nextState();
      }
    }, 1);
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

  if (pomodoro.checked === true) {

    if (counterPomodoro < 4) {
      shortBreak.checked = true;
      toggleShortBreak();
    } 
    if (counterPomodoro >= 4) {
      longBreak.checked = true;
      toggleLongBreak();
      counterPomodoro = 0;
    }
  } else if (shortBreak.checked === true || longBreak.checked === true ) {
    pomodoro.checked = true;
    togglePomodoro();
  }
};

restart.addEventListener("click", restartState);
play.addEventListener("click", playCount);
pause.addEventListener("click", pauseCount);
next.addEventListener("click", nextState);
