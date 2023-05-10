const pomodoro = document.querySelector('#pomodoro');
const shortBreak = document.querySelector('#shortBreak');
const longBreak = document.querySelector('#longBreak');


const htmlBg = document.querySelector('html');
const navbarLogoImg = document.querySelector('.navbar__logo--img');
const navbarSettings = document.querySelector('.navbar__settings');
const timerStatus = document.querySelector('.timer__status');
const timerControls = document.querySelector('.timer__controls');
const timerControlsIcon = document.querySelector('.timer__controls--icon');
const restart = document.querySelector('.restart');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const next = document.querySelector('.next');
const tasks = document.querySelector('.tasks');
const tasksHeaderIcon = document.querySelector('.tasks__header--icon');
const tasksNewTask = document.querySelector('.tasks__new-task');
const tasksNewTaskComplete = document.querySelector('.tasks__new-task--complete');
const tasksNewTaskName = document.querySelector('.tasks__new-task--name');
const tasksNewTaskMen = document.querySelector('.tasks__new-task--menu');


pomodoro.addEventListener('click', togglePomodoro);
shortBreak.addEventListener('click', toggleShortBreak);
longBreak.addEventListener('click', toggleLongBreak);


function togglePomodoro() {
  htmlBg.classList.remove('bl-html', 'gr-html');
  navbarLogoImg.classList.remove('bl-navbar__logo--img', 'gr-navbar__logo--img');
  navbarSettings.classList.remove('bl-navbar__settings', 'gr-navbar__settings');
  timerStatus.classList.remove('bl-timer__status', 'gr-timer__status');
  timerControls.classList.remove('bl-timer__controls', 'gr-timer__controls');
  timerControlsIcon.classList.remove('bl-timer__controls--icon', 'gr-timer__controls--icon');
  play.classList.remove('bl-timer__controls--icon', 'gr-timer__controls--icon');
  pause.classList.remove('bl-timer__controls--icon', 'gr-timer__controls--icon');
  next.classList.remove('bl-timer__controls--icon', 'gr-timer__controls--icon');
  tasks.classList.remove('bl-tasks', 'gr-tasks');
  tasksHeaderIcon.classList.remove('bl-tasks__header--icon', 'gr-tasks__header--icon');
  tasksNewTask.classList.remove('bl-tasks__new-task', 'gr-tasks__new-task');
  tasksNewTaskComplete.classList.remove('bl-tasks__new-task--complete', 'gr-tasks__new-task--complete');
  tasksNewTaskName.classList.remove('bl-tasks__new-task--name', 'gr-tasks__new-task--name');
  tasksNewTaskMen.classList.remove('bl-tasks__new-task--menu', 'gr-tasks__new-task--menu');

  minutes.textContent = 25;
  seconds.textContent = `0${0}`;
}
function toggleShortBreak() {
  htmlBg.classList.add('bl-html');
  htmlBg.classList.remove('gr-html');
  navbarLogoImg.classList.add('bl-navbar__logo--img');
  navbarLogoImg.classList.remove('gr-navbar__logo--img');
  navbarSettings.classList.add('bl-navbar__settings');
  navbarSettings.classList.remove('gr-navbar__settings');
  timerStatus.classList.add('bl-timer__status');
  timerStatus.classList.remove('gr-timer__status');
  timerControls.classList.add('bl-timer__controls');
  timerControls.classList.remove('gr-timer__controls');
  timerControlsIcon.classList.add('bl-timer__controls--icon');
  timerControlsIcon.classList.remove('gr-timer__controls--icon');
  play.classList.add('bl-timer__controls--icon');
  play.classList.remove('gr-timer__controls--icon');
  pause.classList.add('bl-timer__controls--icon');
  pause.classList.remove('gr-timer__controls--icon');
  next.classList.add('bl-timer__controls--icon');
  next.classList.remove('gr-timer__controls--icon');
  tasks.classList.add('bl-tasks');
  tasks.classList.remove('gr-tasks');
  tasksHeaderIcon.classList.add('bl-tasks__header--icon');
  tasksHeaderIcon.classList.remove('gr-tasks__header--icon');
  tasksNewTask.classList.add('bl-tasks__new-task');
  tasksNewTask.classList.remove('gr-tasks__new-task');
  tasksNewTaskComplete.classList.add('bl-tasks__new-task--complete');
  tasksNewTaskComplete.classList.remove('gr-tasks__new-task--complete');
  tasksNewTaskName.classList.add('bl-tasks__new-task--name');
  tasksNewTaskName.classList.remove('gr-tasks__new-task--name');
  tasksNewTaskMen.classList.add('bl-tasks__new-task--menu');
  tasksNewTaskMen.classList.remove('gr-tasks__new-task--menu');

  minutes.textContent = `0${5}`;
  seconds.textContent = `0${0}`;
}
function toggleLongBreak() {
  htmlBg.classList.add('gr-html');
  htmlBg.classList.remove('bl-html');
  navbarLogoImg.classList.add('gr-navbar__logo--img');
  navbarLogoImg.classList.remove('bl-navbar__logo--img');
  navbarSettings.classList.add('gr-navbar__settings');
  navbarSettings.classList.remove('bl-navbar__settings');
  timerStatus.classList.add('gr-timer__status');
  timerStatus.classList.remove('bl-timer__status');
  timerControls.classList.add('gr-timer__controls');
  timerControls.classList.remove('bl-timer__controls');
  timerControlsIcon.classList.add('gr-timer__controls--icon');
  timerControlsIcon.classList.remove('bl-timer__controls--icon');
  play.classList.add('gr-timer__controls--icon');
  play.classList.remove('bl-timer__controls--icon');
  pause.classList.add('gr-timer__controls--icon');
  pause.classList.remove('bl-timer__controls--icon');
  next.classList.add('gr-timer__controls--icon');
  next.classList.remove('bl-timer__controls--icon');
  tasks.classList.add('gr-tasks');
  tasks.classList.remove('bl-tasks');
  tasksHeaderIcon.classList.add('gr-tasks__header--icon');
  tasksHeaderIcon.classList.remove('bl-tasks__header--icon');
  tasksNewTask.classList.add('gr-tasks__new-task');
  tasksNewTask.classList.remove('bl-tasks__new-task');
  tasksNewTaskComplete.classList.add('gr-tasks__new-task--complete');
  tasksNewTaskComplete.classList.remove('bl-tasks__new-task--complete');
  tasksNewTaskName.classList.add('gr-tasks__new-task--name');
  tasksNewTaskName.classList.remove('bl-tasks__new-task--name');
  tasksNewTaskMen.classList.add('gr-tasks__new-task--menu');
  tasksNewTaskMen.classList.remove('bl-tasks__new-task--menu');

  minutes.textContent = 15;
  seconds.textContent = `0${0}`;
}