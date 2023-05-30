{/* 
        <article class="tasks__new-task">
          <div class="tasks__new-task--inputs">
            <input
              class="tasks__new-task--complete"
              type="checkbox"
              id="complete-task"
            />
            <label for="complete-task"></label>
            <input
              class="tasks__new-task--name"
              type="text"
              placeholder="Name task"
            />
          </div>
          <div>
            <input id="menu-task" type="button" value="">
            <label for="menu-task">
              <svg
              class="tasks__new-task--menu"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="20"
              fill="none"
            >
              <path
                fill="#fff"
                d="M3 7.143c-.593 0-1.173.167-1.667.481-.493.314-.878.76-1.105 1.283a2.731 2.731 0 0 0-.17 1.65c.115.555.401 1.064.82 1.463.42.4.955.672 1.537.782a3.14 3.14 0 0 0 1.733-.162 2.974 2.974 0 0 0 1.346-1.053C5.824 11.117 6 10.565 6 10a2.79 2.79 0 0 0-.879-2.02A3.078 3.078 0 0 0 3 7.143Zm0-1.429c.593 0 1.173-.167 1.667-.481.493-.314.878-.76 1.105-1.282a2.731 2.731 0 0 0 .17-1.651 2.818 2.818 0 0 0-.82-1.463A3.05 3.05 0 0 0 3.584.055a3.14 3.14 0 0 0-1.733.162A2.973 2.973 0 0 0 .506 1.27 2.761 2.761 0 0 0 0 2.857c0 .758.316 1.485.879 2.02A3.078 3.078 0 0 0 3 5.714Zm0 8.572c-.593 0-1.173.167-1.667.481-.493.314-.878.76-1.105 1.282a2.731 2.731 0 0 0-.17 1.651c.115.555.401 1.064.82 1.463.42.4.955.672 1.537.782a3.14 3.14 0 0 0 1.733-.163 2.973 2.973 0 0 0 1.346-1.052c.33-.47.506-1.022.506-1.587a2.79 2.79 0 0 0-.879-2.02A3.077 3.077 0 0 0 3 14.286Z"
              />
            </svg>
            </label>
          </div>
        </article> */}

const buttonAddTasks = document.querySelector('#add-task')

function createTaskNode() {
  const containerNewTask = document.createElement('article')
  containerNewTask.setAttribute('class', 'tasks__new-task')

    const containerInputsTask = document.createElement('div')
    containerInputsTask.setAttribute('class', 'tasks__new-task--inputs')

      const inputCheckTasks = document.createElement('input')
      inputCheckTasks.setAttribute('class', 'tasks__new-task--complete')
      inputCheckTasks.setAttribute('type', 'checkbox')
      inputCheckTasks.setAttribute('id', 'complete-task')

      const labelCheckTasks = document.createElement('label')
      labelCheckTasks.setAttribute('for', 'complete-task')

      const inputNameTasks = document.createElement('input')
      inputNameTasks.setAttribute('class', 'tasks__new-task--name')
      inputNameTasks.setAttribute('type', 'text')
      inputNameTasks.setAttribute('placeholder', 'Name task')

    containerInputsTask.appendChild(inputCheckTasks)
    containerInputsTask.appendChild(labelCheckTasks)
    containerInputsTask.appendChild(inputNameTasks)

    const containerInputsMenu = document.createElement('div')

      const inputMenuTask = document.createElement('input')
      inputMenuTask.setAttribute('id', 'menu-task')
      inputMenuTask.setAttribute('type', 'button')

      const labelMenuTasks = document.createElement('label')
      labelMenuTasks.setAttribute('for', 'menu-task')

        const svgMenuTask = document.createElement('svg')
        svgMenuTask.setAttribute('class', 'tasks__new-task--menu')
        svgMenuTask.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        svgMenuTask.setAttribute('width', '6')
        svgMenuTask.setAttribute('height', '20')
        svgMenuTask.setAttribute('fill', 'none')

          const pathMenuTask = document.createElement('path')
          pathMenuTask.setAttribute('fill', '#fff')
          pathMenuTask.setAttribute('d', 'M3 7.143c-.593 0-1.173.167-1.667.481-.493.314-.878.76-1.105 1.283a2.731 2.731 0 0 0-.17 1.65c.115.555.401 1.064.82 1.463.42.4.955.672 1.537.782a3.14 3.14 0 0 0 1.733-.162 2.974 2.974 0 0 0 1.346-1.053C5.824 11.117 6 10.565 6 10a2.79 2.79 0 0 0-.879-2.02A3.078 3.078 0 0 0 3 7.143Zm0-1.429c.593 0 1.173-.167 1.667-.481.493-.314.878-.76 1.105-1.282a2.731 2.731 0 0 0 .17-1.651 2.818 2.818 0 0 0-.82-1.463A3.05 3.05 0 0 0 3.584.055a3.14 3.14 0 0 0-1.733.162A2.973 2.973 0 0 0 .506 1.27 2.761 2.761 0 0 0 0 2.857c0 .758.316 1.485.879 2.02A3.078 3.078 0 0 0 3 5.714Zm0 8.572c-.593 0-1.173.167-1.667.481-.493.314-.878.76-1.105 1.282a2.731 2.731 0 0 0-.17 1.651c.115.555.401 1.064.82 1.463.42.4.955.672 1.537.782a3.14 3.14 0 0 0 1.733-.163 2.973 2.973 0 0 0 1.346-1.052c.33-.47.506-1.022.506-1.587a2.79 2.79 0 0 0-.879-2.02A3.077 3.077 0 0 0 3 14.286Z')

        svgMenuTask.appendChild(pathMenuTask)

      labelMenuTasks.appendChild(svgMenuTask)


    containerInputsMenu.appendChild(inputMenuTask)
    containerInputsMenu.appendChild(labelMenuTasks)


  
  containerNewTask.appendChild(containerInputsTask)
  containerNewTask.appendChild(containerInputsMenu)
  return containerNewTask
}
tasks.appendChild(createTaskNode())