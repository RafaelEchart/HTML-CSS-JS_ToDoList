import ToDoList from '../../ToDoList';

const taskCompleted = (id, checked) => {
  const taskSelected = global.document.getElementById(`edit-task-${id}`);
  const tasks = ToDoList.currentTasks;
  const newArrayOfTasks = [];

  if (checked) {
    taskSelected.style.textDecoration = 'line-through';
    taskSelected.style.color = 'gray';

    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === id) {
        tasks[i].completed = true;
        newArrayOfTasks.push(tasks[i]);
      } else {
        newArrayOfTasks.push(tasks[i]);
      }
    }
    ToDoList.newArray = newArrayOfTasks;
  } else {
    taskSelected.style.textDecoration = 'none';
    taskSelected.style.color = 'black';
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === id) {
        tasks[i].completed = false;
        newArrayOfTasks.push(tasks[i]);
      } else {
        newArrayOfTasks.push(tasks[i]);
      }
    }
    ToDoList.newArray = newArrayOfTasks;
  }
//   localStorage.setItem('tasks', JSON.stringify(ToDoList.currentTasks))
};

export default taskCompleted;