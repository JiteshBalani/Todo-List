const container = document.querySelector(".container");
const input = document.getElementById("input");
const tasklist = document.getElementById("tasklist");
const modeButton = document.querySelector("#modeButton");

function addTask(){
    if (input.value === '') {
        alert('Add a task');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Delete";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

function handleKey (event) {
    if (event.key === "Enter"){
        addTask();
    }
}

tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

input.addEventListener("keypress", handleKey);

modeButton.addEventListener("click", () => {
    container.classList.toggle("dark-mode");
    container.classList.toggle("light-mode");

    const darkMode = container.classList.contains("dark-mode");
    const icon = modeButton.querySelector("i");

    if (darkMode){
        icon.classList.remove("fa-regular", "fa-sun", "fa-2xl");
        icon.classList.add("fa-solid", "fa-moon", "fa-2xl");
    }
    else {
        icon.classList.remove("fa-solid", "fa-moon", "fa-2xl");
        icon.classList.add("fa-regular", "fa-sun", "fa-2xl");

    }
});



function saveData() {
    localStorage.setItem("data", tasklist.innerHTML);
}

function showTasks() {
    tasklist.innerHTML = localStorage.getItem("data");
}

showTasks();
