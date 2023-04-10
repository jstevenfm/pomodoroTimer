const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let interval;

const restartState = () => {
  console.log("restart state");
  clearInterval(interval);
};

const toggleCount = () => {
  console.log("paly/pause count");
  console.log(minutes.textContent);
  if (Number(minutes.textContent) >= 0) {
    interval = setInterval(() => {
      seconds.textContent = Number(seconds.textContent) - 1;
      if (Number(seconds.textContent) < 0) {
        seconds.textContent = 12;
        minutes.textContent = Number(minutes.textContent) - 1;
      }
      if (Number(seconds.textContent) <= 9) {
        seconds.textContent = `0${seconds.textContent}`;
      }
      // if (Number(minutes.textContent) <= 9) {
      //   minutes.textContent = `0${minutes.textContent}`;
      // }
    }, 1000);
  }
};

const nextState = () => {
  console.log("count stop");
};

restart.addEventListener("click", restartState);
play.addEventListener("click", toggleCount);
next.addEventListener("click", nextState);
