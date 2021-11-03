import addTaskToList from './AddTask';
import ToDoList from '../../ToDoList';

describe('add and delete items', () => {
  beforeEach(() => {
    ToDoList.newArray = [];
  });

  test('Add one new task from input (length > 0)', () => {
    global.document.getElementById('addNewInput').value = '555';
    expect(addTaskToList()).toBe('555');
  });

  test('Adding a empty input === undefined', () => {
    global.document.getElementById('addNewInput').value = '';
    expect(addTaskToList()).toBe(undefined);
  });

  test('Check taskListArray length, add only tasks with length > 0, this data is going to be saved in LocalStorage', () => {
    global.document.getElementById('addNewInput').value = 'newTask1';
    addTaskToList();
    global.document.getElementById('addNewInput').value = 'newTask2';
    addTaskToList();
    global.document.getElementById('addNewInput').value = '';
    addTaskToList();

    expect(ToDoList.currentTasks.length).toBe(2);
  });

  // test('Check if the tasks are being added correctly into the DOM, check DOM taskList', () => {
  //   global.document.getElementById('addNewInput').value = 'newTask1';
  //   addTaskToList();
  //   global.document.getElementById('addNewInput').value = 'newTask2';
  //   addTaskToList();
  //   global.document.getElementById('addNewInput').value = 'newTask3';
  //   addTaskToList();
  //   global.document.getElementById('addNewInput').value = '';
  //   addTaskToList();

  //   const taskContainerTest = global.document.getElementById("tasks");

  //   expect(taskContainerTest).toHaveLength(3);
  // });
});
