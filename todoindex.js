function addtask() {
    let task= document.getElementById("task");
    let inputTask = task.value.trim();
    if (inputTask === "") {
        alert("Please enter a task!");
        return;
    }
    let tasklist = document.getElementById('task-list');
    let li = document.createElement("li")
    li.innerHTML =`
    <span onclick="toggleTask(this)">${inputTask}</span>  
    <button class="delete-btn" onclick="deleteTask(this)">Delete Task</button>  
    `;
    tasklist.appendChild(li);
    task.value = "";
}
function toggleTask(tasktext) {
    tasktext.classList.toggle("completed");
    setTimeout(() => {
        deleteTask(tasktext);
    }, 500);
}
function deleteTask(task) {
    task.parentElement.remove();
}
function goBack() {
    window.location.href = "index.html";
}