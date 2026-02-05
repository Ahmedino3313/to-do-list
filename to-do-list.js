console.log("Java Script is Working");

const input = document.getElementById ("taskInput");
const addBtn = document.getElementById ("addBtn");
const taskList = document.getElementById ("taskList");
const counter = document.getElementById ("counter");

addBtn.addEventListener("click", addTask);

function addTask (){
    if(input.value === "") {
        alert ("Please enter a task");
        return;
    }

    const li = document.createElement ("li");
    li.innerText = input.value;

    // Mark Complete   
    li.addEventListener ("click", function (){
        li.classList.toggle("completed");
    });

    // Edit Button 
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add ("edit-btn"); 

    editBtn.addEventListener("click", function () {
        const newText = prompt ("Edit your task:", li.firstChild.textContent);
        if (newText !== null && newText !== "") {
            li.firstChild.textContent = newText
        }
    });
    
    // Delete Button 
    const delBtn = document.createElement ("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete-btn");
    
    delBtn.addEventListener ("click", function(){
        li.remove();
        updateCounter();
    });
    
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    
    input.value = "";

    updateCounter();
}

// Enter Key Support 
input.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        addTask();
    }
});

// Counter Function 
function updateCounter () {
    const totalTasks = taskList.children.length;
    counter.innerText = "Tasks:" + totalTasks;
}