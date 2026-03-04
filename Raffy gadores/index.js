document.addEventListener("DOMContentLoaded", function () {

    let tasks = [];

    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const emptyMessage = document.getElementById("emptyMessage");

    addBtn.addEventListener("click", function () {
        const text = taskInput.value.trim();

        if (text === "") return;

        tasks.push(text);
        taskInput.value = "";

        renderTasks();
    });

    function renderTasks() {
        taskList.innerHTML = "";

        if (tasks.length === 0) {
            emptyMessage.style.display = "block";
        } else {
            emptyMessage.style.display = "none";
        }

        tasks.forEach(function (task, index) {
            const li = document.createElement("li");

            li.innerHTML = `
                ${task}
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            taskList.appendChild(li);
        });
    }

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1);
            renderTasks();
        }
    });

    renderTasks();
});