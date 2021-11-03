import ToDoList from '../../ToDoList';

const input = global.document.getElementById('addNewInput');
const taskContainer = global.document.getElementById('tasks');

const maxIdValue = (ToDoList) => {
  const ids = ToDoList.map((task) => task.index);
  const sorted = ids.sort((a, b) => a - b);
  return sorted[sorted.length - 1] + 1;
};

const addTaskToList = () => {
  console.log('input value', input.value);
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
            <input  type="checkbox" id="checkbox-${id}" />
            <input type="text" value="${input.value}" id="edit-task-${id}" class="new-input" maxlength="30" />
            </div>
            <ion-icon name="ellipsis-vertical-outline" class="icon" id="edit-${id}"></ion-icon>
  
          <ion-icon name="trash-outline" class="icon displayNotActive" id="remove-this-${id}"></ion-icon>
  
        </div>`;

    taskContainer.insertAdjacentHTML('beforeend', newTask);

    ToDoList.updateTasks = {
      index: id,
      description: input.value,
      completed: false,
    };

    // localStorage.setItem('tasks', JSON.stringify(ToDoList.currentTasks));

    return input.value;
  }

  return undefined;
};

export default addTaskToList;