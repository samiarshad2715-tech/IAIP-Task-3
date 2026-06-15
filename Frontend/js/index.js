import {
    getTasks,
    createTask,
    deleteTask,
    updateTask
} from "./api.js";

const taskInput = document.getElementById("task-input");
const submitBtn = document.getElementById("submit-btn");
const allTasksDiv = document.getElementById("all-tasks");
loadTasks();

submitBtn.addEventListener("click", async () => {

    const taskText = taskInput.value.trim();

    if (!taskText) return;

    await createTask(taskText);

    taskInput.value = "";

    loadTasks();
});

async function loadTasks() {

    const data = await getTasks();

    allTasksDiv.innerHTML = "";

    data.allTasks.forEach((task) => {

        const taskDiv = document.createElement("div");

        taskDiv.classList.add("task-card");

        taskDiv.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.task}
            </span>

            <div class="task-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="complete-btn">
                    ${task.completed ? "Undo" : "Complete"}
                </button>
            </div>
        `;

        const deleteBtn =
            taskDiv.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", async () => {

            await deleteTask(task._id);

            loadTasks();
        });

        const completeBtn =
            taskDiv.querySelector(".complete-btn");

        completeBtn.addEventListener("click", async () => {

            await updateTask(
                task._id,
                task.task,
                !task.completed
            );

            loadTasks();
        });

        const editBtn =
            taskDiv.querySelector(".edit-btn");

        editBtn.addEventListener("click", async () => {

            const newTask =
                prompt("Edit Task", task.task);

            if (!newTask) return;

            await updateTask(
                task._id,
                newTask,
                task.completed
            );

            loadTasks();
        });

        allTasksDiv.appendChild(taskDiv);
    });
}