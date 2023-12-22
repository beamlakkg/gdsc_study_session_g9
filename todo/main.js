document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var task = document.getElementById("taskInput").value;
    var li = document.createElement("li");
    li.textContent = task;
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      this.parentNode.remove();
    });
    li.appendChild(removeButton);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
  });
