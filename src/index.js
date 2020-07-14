document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const description = document.getElementById("new-task-description");
    const task = document.createElement("li"); 

    task.id = description.value
    task.innerHTML = `${description.value}<button>X</button>`


    
    const unordered = document.getElementById("tasks")
    unordered.appendChild(task)

    
    // task.addEventListener("click", function(e){
    //   console.log(e.target)
    //   task.remove()
    // })


    e.target.reset();

  })

  document.addEventListener("click", function(e){
    if (e.target.innerText === "X"){
      e.target.parentNode.remove()
    }
    console.log(e.target)
  })



});


