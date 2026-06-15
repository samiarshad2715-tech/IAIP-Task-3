import { BASE_URL } from "./config.js";

export async function getTasks() {
    const response = await fetch(`${BASE_URL}/view-tasks`);
    const data = await response.json();
    return data;
}

export async function createTask(taskText) {

    const response = await fetch(`${BASE_URL}/create-task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: taskText,
            completed: false
        })
    });

    return await response.json();
}

export async function deleteTask(id) {

    const response = await fetch(`${BASE_URL}/delete-tasks/${id}`, {
        method: "DELETE"
    });

    return await response.json();
}

export async function updateTask(id, task, completed) {

    const response = await fetch(`${BASE_URL}/edit-tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task,
            completed
        })
    });

    return await response.json();
}