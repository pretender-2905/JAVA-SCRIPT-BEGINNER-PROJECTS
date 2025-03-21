let input = document.getElementById("input");
let taskContainer = document.querySelector(".get-task-div");
function addTask() {
    let task = input.value;
    if(task === ""){
        return;
    }

let task_btn_div = document.createElement("div");
task_btn_div.classList.add("task-btn-div"); //for styling

let task_p = document.createElement("p");
let task_button = document.createElement("button");
task_p.textContent = `➼ ${task}`;
task_button.textContent = `Delete`;

task_button.classList.add("delete-btn-style");
task_p.classList.add("task-p");

taskContainer.appendChild(task_btn_div);
task_btn_div.appendChild(task_p);
task_btn_div.appendChild(task_button);

// delete functionality

task_button.onclick = function(){
    task_btn_div.remove();
}

input.value = ""
}