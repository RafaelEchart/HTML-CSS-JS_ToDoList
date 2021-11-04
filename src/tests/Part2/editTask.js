import ToDoList from '../../ToDoList';

const submitEditTask = (id) => {
  const inputToSave = global.document.getElementById(`edit-task-${id}`);

  const newTask = inputToSave.value;

  if (newTask.length) {
    const updatedTasks = ToDoList.currentTasks;
    updatedTasks[id].description = newTask;

    ToDoList.newArray = updatedTasks;

    // localStorage.setItem('tasks', JSON.stringify(ToDoList.currentTasks));
    Object.defineProperty(window, 'localStorage', {
      value: ToDoList.currentTasks,
    });
  }

  return undefined;
};

export default submitEditTask;
