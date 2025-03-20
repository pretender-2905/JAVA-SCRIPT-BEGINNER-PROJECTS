let input = document.getElementById("input");

function addTask(){
    let task = input.value;
    let row = document.querySelector(".get-task-div");


    row.innerHTML = task;
}