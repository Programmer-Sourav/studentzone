let todos = []

function addATodo(){
      const inputTodo = document.getElementById("todoInput").value;
      todos = [...todos, inputTodo];
      console.log(1111, todos)
      inputTodo.value = "";
      displayTodos(todos);
}


function displayTodos(todos){
    const todoElement = document.getElementById("alltodo")
    todoElement.innerHTML = "";
     todos.map((todoItem1, index)=>{
        
            const todoItem = document.createElement("todo")

            const span = document.createElement("span")
            span.textContent = todoItem1;
            todoItem.appendChild(span)


            //Edit Button
            const editButton = document.createElement("button")
            editButton.textContent = "Edit";
            editButton.style.marginLeft = "10px";
            editButton.onclick =() =>editTodo(index)
            todoItem.appendChild(editButton)

            //Delete Button
            const deleteButton = document.createElement("Delete")
            deleteButton.textContent = "Delete"
            deleteButton.style.marginLeft="10px";
            deleteButton.onclick = () => deleteTodo(index)
            todoItem.appendChild(deleteButton);

           
            todoElement.appendChild(todoItem)
        
     })


     function deleteTodo(index){
        todos.splice(index, 1);
        displayTodos(todos);
     }

     function editTodo(index) {
    const newValue = prompt("Edit your todo:", todos[index]);
    if (newValue !== null && newValue.trim() !== "") {
        todos[index] = newValue.trim();
        displayTodos(todos);
    }
}

}
