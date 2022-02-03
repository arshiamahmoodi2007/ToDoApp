const taskInput = document.getElementById("task_input");
const FreeTimeBtn = document.getElementById("free_time_btn");
const WorkBtn = document.getElementById("work_btn");
const LessonBtn = document.getElementById("lesson_btn");
const ClearAllBtn = document.getElementById("clear-all-btn");
const taskList = document.querySelector(".list");

// ======================== Dom Loaded ======================

LoadEvenListeners();

function LoadEvenListeners() {
    document.addEventListener("DOMContentLoaded", function () {
        GetTaskFromFreeTime();
        GetTaskFromWork();
        GetTaskFromLesson();
    });
}

// ======================== Add Task To FreeTime ======================

FreeTimeBtn.addEventListener("click", function () {
    if (taskInput.value != "") {
        AddTaskToFreeTime()
    }
    else {
        alert("Please fill in the entry ...");
    }
});

function AddTaskToFreeTime() {
    // Create li

    const li = document.createElement("li");

    li.className = "color-pink";

    li.id = "task-item";

    li.appendChild(document.createTextNode(taskInput.value));

    // Create Remove Butten

    const removeBtn = document.createElement("a");

    removeBtn.className = "btn btn-danger delete-item"

    removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x" viewBox="0 0 16 16"> <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>';

    // Append Child's

    li.appendChild(removeBtn);

    taskList.appendChild(li);

    // Remove Task

    removeBtn.addEventListener("click", removeTaskFreeTime);

    function removeTaskFreeTime(e) {
        findedTask = e.target.parentElement;

        if (findedTask.id != "task-item") {
            findedTask = e.target.parentElement.parentElement;
        }

        if (findedTask.id != "task-item") {
            findedTask = e.target.parentElement.parentElement.parentElement;
        }

        li.classList.add("deleted");

        RemoveTaskFromFreeTimeLocalStorage(findedTask);
    }

    // Add Task To Local Storage

    AddTaskToFreeTimeLocalStorage(taskInput.value);

    // Finish

    taskInput.value = "";
}

// ======================== Add Task To Work ======================

WorkBtn.addEventListener("click", function () {
    if (taskInput.value != "") {
        AddTaskToWork()
    }
    else {
        alert("Please fill in the entry ...");
    }
});

function AddTaskToWork() {
    // Create li

    const li = document.createElement("li");

    li.className = "color-orange";

    li.id = "task-item";

    li.appendChild(document.createTextNode(taskInput.value));

    // Create Remove Butten

    const removeBtn = document.createElement("a");

    removeBtn.className = "btn btn-danger delete-item"

    removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x" viewBox="0 0 16 16"> <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>';

    // Append Child's

    li.appendChild(removeBtn);

    taskList.appendChild(li);

    // Remove Task

    removeBtn.addEventListener("click", removeTaskWork);

    function removeTaskWork(e) {
        findedTask = e.target.parentElement;

        if (findedTask.id != "task-item") {
            findedTask = e.target.parentElement.parentElement;
        }

        if (findedTask.id != "task-item") {
            findedTask = e.target.parentElement.parentElement.parentElement;
        }

        li.classList.add("deleted");

        RemoveTaskFromWorkLocalStorage(findedTask);
    }

    // Add Task To Local Storage

    AddTaskToWorkLocalStorage(taskInput.value);

    // Finish

    taskInput.value = "";
}

// ======================== Add Task To Lesson ======================

LessonBtn.addEventListener("click", function () {
    if (taskInput.value != "") {
        AddTaskToLesson()
    }
    else {
        alert("Please fill in the entry ...");
    }
});

function AddTaskToLesson() {
    // Create li

    const li = document.createElement("li");

    li.className = "color-green";

    li.id = "task-item";

    li.appendChild(document.createTextNode(taskInput.value));

    // Create Remove Butten

    const removeBtn = document.createElement("a");

    removeBtn.className = "btn btn-danger delete-item"

    removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x" viewBox="0 0 16 16"> <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>';

    // Append Child's

    li.appendChild(removeBtn);

    taskList.appendChild(li);

    // Remove Task

    removeBtn.addEventListener("click", removeTaskLesson);

    function removeTaskLesson(e) {
        findedTask = e.target.parentElement;

        if (findedTask.id != "task-item") {
            findedTask = e.target.parentElement.parentElement;
        }

        if (findedTask.id != "task-item") {
            findedTask = e.target.parentElement.parentElement.parentElement;
        }

        li.classList.add("deleted");

        RemoveTaskFromLessonLocalStorage(findedTask);
    }

    // Add Task To Local Storage

    AddTaskToLessonLocalStorage(taskInput.value);

    // Finish

    taskInput.value = "";
}

// ======================== Add Task To Free Time Local Storage ======================

function AddTaskToFreeTimeLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks-freetime") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-freetime"));
    }

    tasks.push(taskItem);

    localStorage.setItem("tasks-freetime", JSON.stringify(tasks));
}

// ======================== Add Task To Work Local Storage ======================

function AddTaskToWorkLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks-work") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-work"));
    }

    tasks.push(taskItem);

    localStorage.setItem("tasks-work", JSON.stringify(tasks));
}

// ======================== Add Task To Lesson Local Storage ======================

function AddTaskToLessonLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks-lesson") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-lesson"));
    }

    tasks.push(taskItem);

    localStorage.setItem("tasks-lesson", JSON.stringify(tasks));
}

// ======================== Remove Task From Free Time Local Storage ======================

function RemoveTaskFromFreeTimeLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks-freetime") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-freetime"));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task + "   ") {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks-freetime", JSON.stringify(tasks));
}

// ======================== Remove Task From Work Local Storage ======================

function RemoveTaskFromWorkLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks-work") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-work"));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task + "   ") {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks-work", JSON.stringify(tasks));
}

// ======================== Remove Task From Lesson Local Storage ======================

function RemoveTaskFromLessonLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks-lesson") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-lesson"));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task + "   ") {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks-lesson", JSON.stringify(tasks));
}

// ======================== Get Task From Free Time Local Storage ======================

function GetTaskFromFreeTime() {
    let tasks;

    if (localStorage.getItem("tasks-freetime") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-freetime"));
    }

    for (task in tasks) {
        // Create li

        const li = document.createElement("li");

        li.className = "color-pink";

        li.id = "task-item";

        li.appendChild(document.createTextNode(tasks[task]));

        // Create Remove Butten

        const removeBtn = document.createElement("a");

        removeBtn.className = "btn btn-danger delete-item"

        removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x" viewBox="0 0 16 16"> <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>';

        // Append Child's

        li.appendChild(removeBtn);

        taskList.appendChild(li);

        // Remove Task

        removeBtn.addEventListener("click", removeTaskFreeTime);

        function removeTaskFreeTime(e) {
            findedTask = e.target.parentElement;

            if (findedTask.id != "task-item") {
                findedTask = e.target.parentElement.parentElement;
            }

            if (findedTask.id != "task-item") {
                findedTask = e.target.parentElement.parentElement.parentElement;
            }

            li.classList.add("deleted");

            RemoveTaskFromFreeTimeLocalStorage(findedTask);
        }
    }
}

// ======================== Get Task From Work Local Storage ======================

function GetTaskFromWork() {
    let tasks;

    if (localStorage.getItem("tasks-work") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-work"));
    }

    for (task in tasks) {
        // Create li

        const li = document.createElement("li");

        li.className = "color-orange";

        li.id = "task-item";

        li.appendChild(document.createTextNode(tasks[task]));

        // Create Remove Butten

        const removeBtn = document.createElement("a");

        removeBtn.className = "btn btn-danger delete-item"

        removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x" viewBox="0 0 16 16"> <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>';

        // Append Child's

        li.appendChild(removeBtn);

        taskList.appendChild(li);

        // Remove Task

        removeBtn.addEventListener("click", removeTaskWork);

        function removeTaskWork(e) {
            findedTask = e.target.parentElement;

            if (findedTask.id != "task-item") {
                findedTask = e.target.parentElement.parentElement;
            }

            if (findedTask.id != "task-item") {
                findedTask = e.target.parentElement.parentElement.parentElement;
            }

            li.classList.add("deleted");

            RemoveTaskFromWorkLocalStorage(findedTask);
        }
    }
}

// ======================== Get Task From Lesson Local Storage ======================

function GetTaskFromLesson() {
    let tasks;

    if (localStorage.getItem("tasks-lesson") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks-lesson"));
    }

    for (task in tasks) {
        // Create li

        const li = document.createElement("li");

        li.className = "color-green";

        li.id = "task-item";

        li.appendChild(document.createTextNode(tasks[task]));

        // Create Remove Butten

        const removeBtn = document.createElement("a");

        removeBtn.className = "btn btn-danger delete-item"

        removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x" viewBox="0 0 16 16"> <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" /> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>';

        // Append Child's

        li.appendChild(removeBtn);

        taskList.appendChild(li);

        // Remove Task

        removeBtn.addEventListener("click", removeTaskLesson);

        function removeTaskLesson(e) {
            findedTask = e.target.parentElement;

            if (findedTask.id != "task-item") {
                findedTask = e.target.parentElement.parentElement;
            }

            if (findedTask.id != "task-item") {
                findedTask = e.target.parentElement.parentElement.parentElement;
            }

            li.classList.add("deleted");

            RemoveTaskFromLessonLocalStorage(findedTask);
        }
    }
}

// ======================== Clear All Task ======================

ClearAllBtn.addEventListener("click", ClearAllTask);

function ClearAllTask() {
    taskList.innerHTML = "";

    // Clear Task In Local Storage
    ClearAllTaskInLocalStorage();
}

// ======================== Clear All Task In Local Storage ======================

function ClearAllTaskInLocalStorage() {
    localStorage.clear();
}
