let task = [];
// get elements
let btn = document.getElementById("newTask");
let input = document.getElementById("input");
let list = document.getElementById("taskList");

// event listener for add button
btn.addEventListener("click", (e) =>{
    e.preventDefault();

    addTask();
})


// function for add task
const addTask = () =>{

    const text = input.value.trim();

        if(text){
            task.push({text: text, done:false});

            updateTaskList()
        }
     
        
}

// function to update task list
const updateTaskList = () =>{
    list.innerHTML = "";

    task.forEach(taskItem =>{
        const li = document.createElement("li");
        list.innerHTML = `
            <div class="taskItem"> 
               <div class="taskText">
                <p class="pp"> ${taskItem.text} </p>
               </div>
               <div>
                <button class="btn "> <i class="fa-solid fa-trash"></i> </button>
               </div>
                
            </div>
        `
        list.appendChild(li);
    })
}