/* eslint-disable import/no-cycle */
import { ToDoList } from './index.js';

const clearButton = document.getElementById('clear');

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
  } else {
    taskSelected.style.textDecoration = 'none';
    taskSelected.style.color = 'black';
    ToDoList.forEach((task) => {
      if (task.index === id) {
        task.completed = false;
      }
    });
  }
  localStorage.setItem('tasks', JSON.stringify(ToDoList));

  const checkCompleted = ToDoList.filter((task) => task.completed === true);

  if (checkCompleted.length) {
    clearButton.classList.remove('clear-notActive');
    clearButton.classList.add('clear-active');
  } else {
    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');
  }
};

export default taskCompleted;