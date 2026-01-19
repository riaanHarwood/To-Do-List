import { getTodos, saveTodos } from "./storage";
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const reminderInput = document.getElementById("reminder-input");
const list = document.getElementById("todo-list");
let todos = getTodos();
renderTodos();
/* Add Todo */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: input.value,
        completed: false,
        reminder: reminderInput.value || undefined,
        createdAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
    form.reset();
});
function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleTodo(todo.id));
        const span = document.createElement("span");
        span.textContent = todo.title;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
        li.append(checkbox, span, deleteBtn);
        if (todo.reminder) {
            const reminder = document.createElement("small");
            reminder.textContent = ` ⏰ ${new Date(todo.reminder).toLocaleString()}`;
            li.appendChild(reminder);
        }
        list.appendChild(li);
    });
}
function toggleTodo(id) {
    todos = todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo);
    saveTodos(todos);
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
    renderTodos();
}
setInterval(() => {
    const now = new Date().toISOString();
    todos.forEach(todo => {
        if (todo.reminder && !todo.completed && todo.reminder <= now) {
            alert(`Reminder: ${todo.title}`);
            todo.reminder = undefined;
            saveTodos(todos);
        }
    });
}, 60000);
