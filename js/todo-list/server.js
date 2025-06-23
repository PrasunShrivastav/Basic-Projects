let counter = 0;
function add() {
  let task = document.getElementById("task").value;

  if (!task.trim()) return; // Don't add empty tasks

  let li = document.createElement("li");
  li.id = counter;

  // Create checkbox
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  // Create task text
  let taskText = document.createElement("span");
  taskText.textContent = task;

  // Create edit button
  let editBtn = document.createElement("button");
  editBtn.onclick = "edit()";
  editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';

  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.onclick = function () {
    li.remove();
  };
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  input.addEventListener("change", function () {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.opacity = "0.6";
      li.style.backgroundColor = "#e9ecef";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.opacity = "1";
      li.style.backgroundColor = "#f8f9fa";
    }
  });
  // Append all elements to li
  li.appendChild(input);
  li.appendChild(taskText);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.className = "task-item";

  // Clear input and add to list
  document.getElementById("task").value = "";
  document.getElementById("addedTaskList").appendChild(li);
  counter++;
}
function del(c) {
  let li = document.getElementById(c);
  document.getElementById("addedTaskList").removeChild(li);
}
