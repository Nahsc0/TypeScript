interface Task {
    name: string;
    completed: boolean;
    category: string;
    dueDate: string;
    priority: string;
}

let taskList: Task[] = [];

function addTask() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const dueDateInput = document.getElementById('dueDateInput') as HTMLInputElement;
    const prioritySelect = document.getElementById('prioritySelect') as HTMLSelectElement;

    const taskName = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;

    if (taskName !== '') {
        const newTask: Task = {
            name: taskName,
            completed: false,
            category: '',
            dueDate: dueDate,
            priority: priority,
        };

        taskList.push(newTask);
        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
        renderTasks();
    }
}

function toggleTaskCompletion(index: number) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function deleteTask(index: number) {
    taskList.splice(index, 1);
    renderTasks();
}

function searchTasks() {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredTasks = taskList.filter((task) =>
        task.name.toLowerCase().includes(searchTerm) ||
        task.category.toLowerCase().includes(searchTerm)
    );

    renderTasks(filteredTasks);
}

function renderTasks(tasksToShow: Task[] = taskList) {
    const taskListElement = document.getElementById('taskList') as HTMLUListElement;
    taskListElement.innerHTML = '';

    tasksToShow.forEach((task, index) => {
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

// Initial rendering of tasks when the page loads
renderTasks();
