import './style.css';

const input = document.getElementById('addNewInput');
const icon = document.getElementById('addNewIcon');
const taskContainer = document.getElementById('tasks');
const clearButton = document.getElementById('clear');

let ToDoList = [];
let completedTasksCount = 0;

const taskCompleted = (id, checked) => {
  const taskSelected = document.getElementById(`task-${id}`);

  if (checked) {
    taskSelected.style.textDecoration = 'line-through';
    taskSelected.style.color = 'gray';
    ToDoList.forEach((task) => {
      if (task.index === id) {
        task.completed = true;
      }
    });
    completedTasksCount += 1;
  } else {
    taskSelected.style.textDecoration = 'none';
    taskSelected.style.color = 'black';
    ToDoList.forEach((task) => {
      if (task.index === id) {
        task.completed = false;
      }
    });
    completedTasksCount -= 1;
  }
  localStorage.setItem('tasks', JSON.stringify(ToDoList));

  if (completedTasksCount > 0) {
    clearButton.classList.remove('clear-notActive');
    clearButton.classList.add('clear-active');
  } else {
    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');
  }
};

const maxIdValue = (ToDoList) => {
  const ids = ToDoList.map((task) => task.index);
  const sorted = ids.sort((a, b) => a - b);
  return sorted[sorted.length - 1] + 1;
};

const addTaskToList = () => {
  const validation = input.classList;
  let id;
  if (ToDoList.length) {
    id = maxIdValue(ToDoList);
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

    ToDoList.push({
      index: id,
      description: input.value,
      completed: false,
    });

    localStorage.setItem('tasks', JSON.stringify(ToDoList));

    input.value = '';
    clearButton.style.display = 'flex';
  } else {
    validation.remove('new-input');
    validation.add('errorInput');
  }
};

const removeTaskFromList = () => {
  if (completedTasksCount > 0) {
    for (let i = 0; i < ToDoList.length; i += 1) {
      if (ToDoList[i].completed) {
        document.getElementById(ToDoList[i].index).remove();
      }
    }

    ToDoList = ToDoList.filter((task) => task.completed === false);
    localStorage.setItem('tasks', JSON.stringify(ToDoList));
    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');

    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');
    clearButton.style.display = 'none';
  }
};

window.onload = () => {
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

    ToDoList = savedTasks;
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
        completedTasksCount += 1;
      }
    }
    if (completedTasksCount > 0) {
      clearButton.classList.remove('clear-notActive');
      clearButton.classList.add('clear-active');
    }
  }
};