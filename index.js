const input = document.getElementById("input");
const tasklist = document.getElementById("tasklist");

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

function saveData() {
    localStorage.setItem("data", tasklist.innerHTML);
}

function showTasks() {
    tasklist.innerHTML = localStorage.getItem("data");
}

showTasks();