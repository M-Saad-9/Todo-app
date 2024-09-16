  /*const form = document.getElementById("form");
  let input = document.getElementById("user-input");
  let result = document.getElementById("result");

  form.addEventListener("submit", (event) => { 
    event.preventDefault();
    
    const value = input.value
   // console.log(value);
    
   
   
 let savedTask = localStorage.getItem("message");
  console.log(savedTask);
   
   if (savedTask) {
     savedTask = JSON.parse(savedTask);
     console.log("if", savedTask)
   } else{
     savedTask = [];
   };
   savedTask.push(value);
   localStorage.setItem("message", JSON.stringify(savedTask));
  let p = document.createElement("p");
  let text = document.createTextNode(value);
  let deleteBtn = document.createElement("span");
  
 deleteBtn.textContent = "×";
 deleteBtn.setAttribute("id", "deleteBtn")
 deleteBtn.onclick = () => {
  p.remove();
  deleteBtn.remove();
 }
 
   p.appendChild(text);
   p.appendChild(deleteBtn);
   result.appendChild(p);
 
  input.value = "";
  })*/
  
  
  
  
  
  
  
  
  const form = document.getElementById("form");
let input = document.getElementById("user-input");
let result = document.getElementById("result");

// Page load hone par LocalStorage se saved tasks ko load karna
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  savedTasks.forEach(task => addToTask(task)); 
};

form.addEventListener("submit", (event) => { 
  event.preventDefault();
  
  const value = input.value;

  if (value) {
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  
    
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks)); 


    addToTask(value);


    input.value = "";
  }
});

function addToTask(task) {
  let p = document.createElement("p");
  let text = document.createTextNode(task);
  let deleteBtn = document.createElement("span");

  deleteBtn.textContent = "×";
  deleteBtn.setAttribute("id", "deleteBtn");
  deleteBtn.onclick = () => {
    p.remove();
    deleteTask(task);  
  };

  p.appendChild(text);
  p.appendChild(deleteBtn);
 // result.appendChild(p);
 result.prepend(p)
}

// Task ko LocalStorage se delete karna
function deleteTask(taskToDelete) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToDelete);  // Task ko remove karna
  localStorage.setItem("tasks", JSON.stringify(tasks));  // Updated tasks ko wapas save karna
}
