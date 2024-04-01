let colorIndex = 0;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value;

  if (taskText.trim() !== "") {
    const li = document.createElement("li");

    li.className = colorIndex % 2 === 0 ? "yellow" : "orange";
    colorIndex++;

    li.textContent = taskText;

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const removeButton = document.createElement("span");
    removeButton.textContent = "❌";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(removeButton);

    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}
