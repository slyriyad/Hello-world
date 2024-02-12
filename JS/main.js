const addbtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todocard");
const tasksContainer = document.querySelector("#todocards");
const delBtn = document.querySelector('.delBtn');

// const nombreStaks = document.querySelector(".nombrestacks")
var nombreTasks = 1; 

function addTask(){
    const newTask = taskCard.cloneNode(true);
    const newDelbtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');
    newDelbtn.addEventListener('click',deComptage);

    newTextArea.value = "New task";
    newDelbtn.addEventListener('click',function(){
        deleteTask(newTask);
    })

    tasksContainer.appendChild(newTask);
}


addbtn.addEventListener('click',comptage);
addbtn.addEventListener('click',addTask);
delBtn.addEventListener('click',deComptage);




delBtn.addEventListener('click',function(){
    deleteTask(taskCard);
})

function deleteTask(task){
    task.remove();
}

function comptage(){
    nombreTasks++;
    document.getElementById("nombretasks").textContent   = nombreTasks;
}


function deComptage(){
    nombreTasks--;
    document.getElementById("nombretasks").textContent   = nombreTasks; 
}
