{
  /* 
        <article class="tasks__new-task">
          <div class="tasks__new-task--inputs">
            <button class="tasks__new-task--btn-complete"></button>
            <input
              class="tasks__new-task--name"
              type="text"
              placeholder="Name task"
            />
          </div>
          <button class="tasks__new-task--btn-remove">
            <svg
              class="tasks__new-task--btn-remove--icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              fill="none"
            >
              <path
                d="M17.25 3.077H13.5v-.77c0-.611-.237-1.198-.659-1.631A2.222 2.222 0 0 0 11.25 0h-4.5c-.597 0-1.169.243-1.591.676A2.338 2.338 0 0 0 4.5 2.308v.769H.75a.74.74 0 0 0-.53.225.78.78 0 0 0 0 1.088.74.74 0 0 0 .53.225h.75v13.847c0 .408.158.799.44 1.087.28.289.662.451 1.06.451h12c.398 0 .78-.162 1.06-.45.282-.29.44-.68.44-1.088V4.615h.75a.74.74 0 0 0 .53-.225.78.78 0 0 0 0-1.088.74.74 0 0 0-.53-.225ZM6 2.307c0-.203.079-.399.22-.543a.74.74 0 0 1 .53-.226h4.5a.74.74 0 0 1 .53.226c.141.144.22.34.22.544v.769H6v-.77Zm9 16.154H3V4.616h12v13.847Zm-7.5-10v6.154a.78.78 0 0 1-.22.544.74.74 0 0 1-1.06 0 .78.78 0 0 1-.22-.544V8.462c0-.204.079-.4.22-.544a.74.74 0 0 1 1.06 0c.141.144.22.34.22.544Zm4.5 0v6.154c0 .204-.079.4-.22.544a.74.74 0 0 1-1.06 0 .779.779 0 0 1-.22-.544V8.462c0-.204.079-.4.22-.544a.74.74 0 0 1 1.06 0c.141.144.22.34.22.544Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </article>*/
}

const btnAddTasks = document.querySelector("#add-task");
btnAddTasks.addEventListener('click', addTask)


function addTask() {
  const taskNode = createTaskNode();
  const containerTasks = document.querySelector(".tasks");
  containerTasks.appendChild(taskNode);

  const btnRemoveTask = taskNode.querySelector(".tasks__new-task--btn-remove");
  btnRemoveTask.addEventListener('click', removeTask);

  // const btnCompleteTask = taskNode.querySelector(".tasks__new-task--btn-complete");
  // btnCompleteTask.addEventListener('click', completeTask);

}

function removeTask() {
  const taskNode = this.parentNode;
  taskNode.remove();
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
  return containerNewTask;
}
