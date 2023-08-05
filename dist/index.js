"use strict";
class Task {
    constructor(name, completed) {
        this.name = name;
        this.completed = completed;
    }
}
const taskList = [];
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const newTask = new Task(taskName, false);
        taskList.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}
function toggleTaskCompletion(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}
function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}
function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskCompletion(index));
        const taskName = document.createTextNode(task.name);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));
        li.appendChild(checkbox);
        li.appendChild(taskName);
        li.appendChild(deleteButton);
        taskListElement.appendChild(li);
    });
}
renderTasks();
//# sourceMappingURL=index.js.map