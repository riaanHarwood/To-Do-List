var _a;
import { loadTasks, saveTasks } from "./storage";
let tasks = loadTasks();
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
function render() {
    list.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        li.style.textDecoration = task.completed ? "line-through" : "none";
        li.addEventListener("click", () => toggleTask(task.id));
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = () => deleteTask(task.id);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
function addTask(title) {
    const newTask = {
        id: Date.now(),
        title,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    render();
}
function toggleTask(id) {
    tasks = tasks.map((task) => task.id === id ? Object.assign(Object.assign({}, task), { completed: !task.completed }) : task);
    saveTasks(tasks);
    render();
}
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks(tasks);
    render();
}
(_a = document.getElementById("addBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    if (input.value.trim()) {
        addTask(input.value);
        input.value = "";
    }
});
render();
