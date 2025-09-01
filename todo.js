const todoInput = document.getElementById("taskInput");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener('click', ()=>{
    const taskText = todoInput.value.trim();
if(taskText !==''){
    const newListItem = document.createElement('li');
    newListItem.textContent =taskText;
    todoList.appendChild(newListItem);
    todoInput.value ='';
}

})