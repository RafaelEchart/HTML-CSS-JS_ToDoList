import './style.css';
import taskCompleted from './completed';
import ToDoList from './ToDoList';

const input = document.getElementById('addNewInput');
const icon = document.getElementById('addNewIcon');
const taskContainer = document.getElementById('tasks');
const clearButton = document.getElementById('clear');

const maxIdValue = (ToDoList) => {
  const ids = ToDoList.map((task) => task.index);
  const sorted = ids.sort((a, b) => a - b);
  return sorted[sorted.length - 1] + 1;
};

const addTaskToList = () => {
  const validation = input.classList;
  let id;
  if (ToDoList.currentTasks.length) {
    id = maxIdValue(ToDoList.currentTasks);
  } else {
    id = 0;
  }

  if (input.value.length) {
    validation.remove('errorInput');
    validation.add('new-input');

    const newTask = `<div class="section" id="${id}">
    <div class="checkbox">
      <input type="checkbox" id="checkbox-${id}"/>
      <span id="task-${id}">${input.value}</span>
    </div>
    <ion-icon name="ellipsis-vertical-outline" class="icon"></ion-icon>
  </div>`;

    taskContainer.insertAdjacentHTML('beforeend', newTask);

    const checkbox = document.getElementById(`checkbox-${id}`);
    checkbox.addEventListener('change', function listener() {
      taskCompleted(id, this.checked);
    });

    ToDoList.updateTasks = {
      index: id,
      description: input.value,
      completed: false,
    };

    localStorage.setItem('tasks', JSON.stringify(ToDoList.currentTasks));

    input.value = '';
    clearButton.style.display = 'flex';
  } else {
    validation.remove('new-input');
    validation.add('errorInput');
  }
};

const removeTaskFromList = () => {
  const checkCompleted = ToDoList.currentTasks.filter((task) => task.completed === true);

  if (checkCompleted.length) {
    for (let i = 0; i < checkCompleted.length; i += 1) {
      if (checkCompleted[i].completed) {
        document.getElementById(checkCompleted[i].index).remove();
      }
    }

    const newArray = ToDoList.currentTasks.filter((task) => task.completed === false);
    ToDoList.newArray = newArray;
    localStorage.setItem('tasks', JSON.stringify(ToDoList.currentTasks));
    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');
  }
};

window.onload = () => {
  let readyToClear = false;
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTaskToList();
    }
  });

  icon.addEventListener('click', addTaskToList);

  clearButton.addEventListener('click', removeTaskFromList);

  const savedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (savedTasks && savedTasks.length) {
    clearButton.style.display = 'flex';

    ToDoList.newArray = savedTasks;
    for (let i = 0; i < savedTasks.length; i += 1) {
      const newTask = `<div class="section" id="${savedTasks[i].index}">
        <div class="checkbox">
          <input  ${savedTasks[i].completed ? 'checked' : ''} type="checkbox" id="checkbox-${savedTasks[i].index}" />
          <span  ${savedTasks[i].completed ? "style='text-decoration: line-through; color: gray'" : ''} id="task-${savedTasks[i].index}">${savedTasks[i].description}</span>
        </div>
        <ion-icon name="ellipsis-vertical-outline" class="icon"></ion-icon>
      </div>`;

      taskContainer.insertAdjacentHTML('beforeend', newTask);

      const checkbox = document.getElementById(`checkbox-${savedTasks[i].index}`);
      checkbox.addEventListener('change', function listener() {
        taskCompleted(savedTasks[i].index, this.checked);
      });

      if (savedTasks[i].completed) {
        readyToClear = true;
      }
    }
    if (readyToClear) {
      clearButton.classList.remove('clear-notActive');
      clearButton.classList.add('clear-active');
    }
  }
};
