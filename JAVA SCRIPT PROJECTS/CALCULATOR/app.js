// Event listner for removing placeholder whne clicked on input field

// let input = document.querySelector(".input").placeholder;
let input = document.getElementById("input");
input.addEventListener("click", ()=>{
    input.placeholder = ""
})

