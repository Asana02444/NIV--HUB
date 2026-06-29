// script.js  ---  FULL REFERENCE

const input  = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list   = document.getElementById("taskList");

let tasks = [];   // single source of truth

function addTask() {
  const text = input.value.trim();
  if (text === "") return;
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
}

function render() {
  list.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) li.classList.add("done");

    li.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      render();
    });

    const del = document.createElement("button");
    del.textContent = "✕";
    del.className = "delete";
    del.addEventListener("click", function (e) {
      e.stopPropagation();
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(del);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});