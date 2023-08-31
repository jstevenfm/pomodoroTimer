const pomodoro = document.querySelector("#pomodoro");
const shortBreak = document.querySelector("#shortBreak");
const longBreak = document.querySelector("#longBreak");

const htmlBg = document.querySelector("html");
const navbarLogoImg = document.querySelector(".navbar__logo--img");
const navbarSettings = document.querySelector(".navbar__settings");
const timerStatus = document.querySelector(".timer__status");
const timerControls = document.querySelector(".timer__controls");
const timerControlsIcon = document.querySelector(".timer__controls--icon");
const restart = document.querySelector(".restart");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const next = document.querySelector(".next");
const tasks = document.querySelector(".tasks");
const tasksHeaderIcon = document.querySelector(".tasks__header--icon");

const tasksNewTask = document.querySelectorAll(".tasks__new-task");
const tasksNewTaskComplete = document.querySelectorAll(
  ".tasks__new-task--btn-complete"
);
const tasksNewTaskName = document.querySelectorAll(".tasks__new-task--name");
const tasksNewTaskRemove = document.querySelectorAll(".tasks__new-task--btn-remove--icon");

pomodoro.addEventListener("click", togglePomodoro);
shortBreak.addEventListener("click", toggleShortBreak);
longBreak.addEventListener("click", toggleLongBreak);

function togglePomodoro() {
  htmlBg.classList.remove("bl-html", "gr-html");
  navbarLogoImg.classList.remove(
    "bl-navbar__logo--img",
    "gr-navbar__logo--img"
  );
  navbarSettings.classList.remove("bl-navbar__settings", "gr-navbar__settings");
  timerStatus.classList.remove("bl-timer__status", "gr-timer__status");
  timerControls.classList.remove("bl-timer__controls", "gr-timer__controls");
  timerControlsIcon.classList.remove(
    "bl-timer__controls--icon",
    "gr-timer__controls--icon"
  );
  play.classList.remove("bl-timer__controls--icon", "gr-timer__controls--icon");
  pause.classList.remove(
    "bl-timer__controls--icon",
    "gr-timer__controls--icon"
  );
  next.classList.remove("bl-timer__controls--icon", "gr-timer__controls--icon");
  tasks.classList.remove("bl-tasks", "gr-tasks");
  tasksHeaderIcon.classList.remove(
    "bl-tasks__header--icon",
    "gr-tasks__header--icon"
  );

  tasksNewTask.forEach((element) => {
    element.classList.remove("bl-tasks__new-task", "gr-tasks__new-task");
  });
  tasksNewTaskComplete.forEach((element) => {
    element.classList.remove(
      "bl-tasks__new-task--btn-complete",
      "gr-tasks__new-task--btn-complete"
    );
  });
  tasksNewTaskName.forEach((element) => {
    element.classList.remove(
      "bl-tasks__new-task--name",
      "gr-tasks__new-task--name"
    );
  });
  tasksNewTaskRemove.forEach((element) => {
    element.classList.remove(
      "bl-tasks__new-task--btn-remove--icon",
      "gr-tasks__new-task--btn-remove--icon"
    );
  });

  minutes.textContent = 25;
  seconds.textContent = `0${0}`;

  clearInterval(interval);
  pause.classList.add("hide-timer__controls--icon");
  play.classList.remove("hide-timer__controls--icon");
}
function toggleShortBreak() {
  htmlBg.classList.add("bl-html");
  htmlBg.classList.remove("gr-html");
  navbarLogoImg.classList.add("bl-navbar__logo--img");
  navbarLogoImg.classList.remove("gr-navbar__logo--img");
  navbarSettings.classList.add("bl-navbar__settings");
  navbarSettings.classList.remove("gr-navbar__settings");
  timerStatus.classList.add("bl-timer__status");
  timerStatus.classList.remove("gr-timer__status");
  timerControls.classList.add("bl-timer__controls");
  timerControls.classList.remove("gr-timer__controls");
  timerControlsIcon.classList.add("bl-timer__controls--icon");
  timerControlsIcon.classList.remove("gr-timer__controls--icon");
  play.classList.add("bl-timer__controls--icon");
  play.classList.remove("gr-timer__controls--icon");
  pause.classList.add("bl-timer__controls--icon");
  pause.classList.remove("gr-timer__controls--icon");
  next.classList.add("bl-timer__controls--icon");
  next.classList.remove("gr-timer__controls--icon");
  tasks.classList.add("bl-tasks");
  tasks.classList.remove("gr-tasks");
  tasksHeaderIcon.classList.add("bl-tasks__header--icon");
  tasksHeaderIcon.classList.remove("gr-tasks__header--icon");

  tasksNewTask.forEach((element) => {
    element.classList.add("bl-tasks__new-task");
    element.classList.remove("gr-tasks__new-task");
  });
  tasksNewTaskComplete.forEach((element) => {
    element.classList.add("bl-tasks__new-task--btn-complete");
    element.classList.remove("gr-tasks__new-task--btn-complete");
  });
  tasksNewTaskName.forEach((element) => {
    element.classList.add("bl-tasks__new-task--name");
    element.classList.remove("gr-tasks__new-task--name");
  });
  tasksNewTaskRemove.forEach((element) => {
    element.classList.add("bl-tasks__new-task--btn-remove--icon");
    element.classList.remove("gr-tasks__new-task--btn-remove--icon");
  });

  minutes.textContent = `0${5}`;
  seconds.textContent = `0${0}`;

  clearInterval(interval);
  pause.classList.add("hide-timer__controls--icon");
  play.classList.remove("hide-timer__controls--icon");
}
function toggleLongBreak() {
  htmlBg.classList.add("gr-html");
  htmlBg.classList.remove("bl-html");
  navbarLogoImg.classList.add("gr-navbar__logo--img");
  navbarLogoImg.classList.remove("bl-navbar__logo--img");
  navbarSettings.classList.add("gr-navbar__settings");
  navbarSettings.classList.remove("bl-navbar__settings");
  timerStatus.classList.add("gr-timer__status");
  timerStatus.classList.remove("bl-timer__status");
  timerControls.classList.add("gr-timer__controls");
  timerControls.classList.remove("bl-timer__controls");
  timerControlsIcon.classList.add("gr-timer__controls--icon");
  timerControlsIcon.classList.remove("bl-timer__controls--icon");
  play.classList.add("gr-timer__controls--icon");
  play.classList.remove("bl-timer__controls--icon");
  pause.classList.add("gr-timer__controls--icon");
  pause.classList.remove("bl-timer__controls--icon");
  next.classList.add("gr-timer__controls--icon");
  next.classList.remove("bl-timer__controls--icon");
  tasks.classList.add("gr-tasks");
  tasks.classList.remove("bl-tasks");
  tasksHeaderIcon.classList.add("gr-tasks__header--icon");
  tasksHeaderIcon.classList.remove("bl-tasks__header--icon");

  tasksNewTask.forEach((element) => {
    element.classList.add("gr-tasks__new-task");
    element.classList.remove("bl-tasks__new-task");
  });
  tasksNewTaskComplete.forEach((element) => {
    element.classList.add("gr-tasks__new-task--btn-complete");
    element.classList.remove("bl-tasks__new-task--btn-complete");
  });
  tasksNewTaskName.forEach((element) => {
    element.classList.add("gr-tasks__new-task--name");
    element.classList.remove("bl-tasks__new-task--name");
  });
  tasksNewTaskRemove.forEach((element) => {
    element.classList.add("gr-tasks__new-task--btn-remove--icon");
    element.classList.remove("bl-tasks__new-task--btn-remove--icon");
  });


  minutes.textContent = 15;
  seconds.textContent = `0${0}`;

  clearInterval(interval);
  pause.classList.add("hide-timer__controls--icon");
  play.classList.remove("hide-timer__controls--icon");
}


/* COUNTER */
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
        const playSound = () => {
          const soundBell = new Audio('./assets/sounds/ac-bel-105874.mp3');
          soundBell.duration = 1;
          soundBell.play();
          console.log(soundBell.duration);
        }
        playSound();
        if (pomodoro.checked === true) {
          counterPomodoro++;
        }
        nextState();
      }
    }, 1000);
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


/* TASKS SECTION */
const storedTasks = JSON.parse(localStorage.getItem("containerTasks")) || [];

function saveStorageTasks() {
  localStorage.setItem("containerTasks", JSON.stringify(storedTasks));
}

function restoreTasks() {
  for (const taskData of storedTasks) {
    const taskNode = createTaskNode();
    createTaskNodeWithData(taskNode, taskData);
    containerTasks.appendChild(taskNode);

    const btnRemoveTask = taskNode.querySelector(".tasks__new-task--btn-remove");
    btnRemoveTask.addEventListener("click", removeTask);

    const btnCompleteTask = taskNode.querySelector(".tasks__new-task--btn-complete");
    btnCompleteTask.addEventListener("click", completeTask);
  }
}

window.addEventListener("load", restoreTasks);


const btnAddTasks = document.querySelector("#add-task");
btnAddTasks.addEventListener('click', addTask)


function addTask() {
  const taskNode = createTaskNode();
  const containerTasks = document.querySelector(".tasks-ul");
  containerTasks.appendChild(taskNode);

  const btnRemoveTask = taskNode.querySelector(".tasks__new-task--btn-remove");
  btnRemoveTask.addEventListener('click', removeTask);

  const btnCompleteTask = taskNode.querySelector(".tasks__new-task--btn-complete");
  btnCompleteTask.addEventListener('click', completeTask);

  saveStorageTasks();

}

function completeTask() {
  const taskNode = this.parentNode.parentNode;
  const containerTasks = document.querySelector(".tasks-ul");
  const checked = this.parentNode.querySelector(".tasks__new-task--btn-complete");
  const nameTask = this.parentNode.querySelector(".tasks__new-task--name");
  nameTask.classList.toggle("task-name-competed")

  if (checked.checked === true) {
      nameTask.classList.add("task-name-competed")
      containerTasks.appendChild(taskNode);
    } else if (checked.checked === false) {
      nameTask.classList.remove("task-name-competed")
      containerTasks.insertBefore(taskNode, containerTasks.firstChild);
    }

    saveStorageTasks();

}

function removeTask() {
  const taskNode = this.parentNode;
  taskNode.remove();

  saveStorageTasks();

}

function createTaskNode() {
  const containerNewTask = document.createElement("article");
  containerNewTask.setAttribute("class", "tasks__new-task");

    const containerInputsTask = document.createElement("div");
    containerInputsTask.setAttribute("class", "tasks__new-task--inputs");

      const btnCheckTasks = document.createElement("input");
      btnCheckTasks.setAttribute("class", "tasks__new-task--btn-complete");
      btnCheckTasks.setAttribute("type", "checkbox");

      const inputNameTasks = document.createElement("input");
      inputNameTasks.setAttribute("class", "tasks__new-task--name");
      inputNameTasks.setAttribute("type", "text");
      inputNameTasks.setAttribute("placeholder", "Name task");

    containerInputsTask.appendChild(btnCheckTasks);
    containerInputsTask.appendChild(inputNameTasks);

    const btnRemoveTask = document.createElement("button");
    btnRemoveTask.setAttribute("class", "tasks__new-task--btn-remove");

      const svgRemoveTask = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgRemoveTask.setAttribute("class", "tasks__new-task--btn-remove--icon");
      svgRemoveTask.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgRemoveTask.setAttribute("width", "18");
      svgRemoveTask.setAttribute("height", "20");
      svgRemoveTask.setAttribute("fill", "none");

      svgRemoveTask.innerHTML = `<path d="M17.25 3.077H13.5v-.77c0-.611-.237-1.198-.659-1.631A2.222 2.222 0 0 0 11.25 0h-4.5c-.597 0-1.169.243-1.591.676A2.338 2.338 0 0 0 4.5 2.308v.769H.75a.74.74 0 0 0-.53.225.78.78 0 0 0 0 1.088.74.74 0 0 0 .53.225h.75v13.847c0 .408.158.799.44 1.087.28.289.662.451 1.06.451h12c.398 0 .78-.162 1.06-.45.282-.29.44-.68.44-1.088V4.615h.75a.74.74 0 0 0 .53-.225.78.78 0 0 0 0-1.088.74.74 0 0 0-.53-.225ZM6 2.307c0-.203.079-.399.22-.543a.74.74 0 0 1 .53-.226h4.5a.74.74 0 0 1 .53.226c.141.144.22.34.22.544v.769H6v-.77Zm9 16.154H3V4.616h12v13.847Zm-7.5-10v6.154a.78.78 0 0 1-.22.544.74.74 0 0 1-1.06 0 .78.78 0 0 1-.22-.544V8.462c0-.204.079-.4.22-.544a.74.74 0 0 1 1.06 0c.141.144.22.34.22.544Zm4.5 0v6.154c0 .204-.079.4-.22.544a.74.74 0 0 1-1.06 0 .779.779 0 0 1-.22-.544V8.462c0-.204.079-.4.22-.544a.74.74 0 0 1 1.06 0c.141.144.22.34.22.544Z" fill="#fff"></path>`;

  btnRemoveTask.appendChild(svgRemoveTask);

  containerNewTask.appendChild(containerInputsTask);
  containerNewTask.appendChild(btnRemoveTask);
  saveStorageTasks();

  return containerNewTask;
}


