// Event listner for removing placeholder whne clicked on input field

// let input = document.querySelector(".input").placeholder;
let  = document.getElementById("input");
input.addEventListener("click", ()=>{
    input.placeholder = ""
})

function appendToDisplay(input){
    let display = document.getElementById("display");
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    let expression = display.value.replace(/÷/g, '/').replace(/x/g, '*');
    display.value = eval(expression);
}