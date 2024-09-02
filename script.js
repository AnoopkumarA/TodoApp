function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement('li');
    
    const taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';
    
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const date = document.createElement('span');
    date.className = 'date';
    date.innerHTML = `<i class="fas fa-calendar-alt"></i> ${taskDate.value}`;

    const time = document.createElement('span');
    time.className = 'time';
    time.innerHTML = `<i class="fas fa-clock"></i> ${taskTime.value}`;
    
    taskDetails.appendChild(taskText);
    taskDetails.appendChild(date);
    taskDetails.appendChild(time);
    
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.onclick = function () {
        const newTask = prompt("Edit your task:", taskText.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskDetails);
    
    const iconContainer = document.createElement('div');
    iconContainer.className = "icons";
    iconContainer.appendChild(editButton);
    iconContainer.appendChild(deleteButton);

    taskItem.appendChild(iconContainer);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}
