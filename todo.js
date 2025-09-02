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
// Function That show date when button is clicked
function displayDate(){
    document.getElementById("demo").innerHTML = displayDate();
}
// function that changes the text to uppercase
function upperCase(){
    const x = document.getElementById("fName");
    x.value = x.value.toUpperCase();
}




//form validation
//declaring variables then accessing the elements by ID
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form1");

//declaring variables for error message
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const password2_error = document.getElementById("password2_error");


//adding event listener to a form
form.addEventListener("submit", (e)=>{

    var emai_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//if statement for name
    if(fullName.value === ''|| fullName.value == null ){// if the value of fullname is empty or null 
        e.preventDefault();// e variable. prevent it from subminting
        name_error.innerHTML ="Name is required";//error message
        name_error.style.color = "red";//text style to red
    }
    else{
        name_error.innerHTML =""; 
    }
    //if statement for email
 if (!email.value.match(emai_check)){
        e.preventDefault();// e variable. prevents the page from loading if email not equal
        email_error.innerHTML ="email is required";//error message
        email_error.style.color = "red";//text style to red
 }
 else{
   email_error.innerHTML =""; 
 }

 // if statement for password
 if(password.value.length <=5 ){// if the password is less or equal to 
        e.preventDefault();// e variable. prevent it from subminting
        password_error.innerHTML ="must be greater than 5 characters";//error message
        password_error.style.color = "red";//text style to red
    }
     if(password.value.length >8 ){// if the password is greater than 8 
        e.preventDefault();// e variable. prevent it from subminting
        password_error.innerHTML ="must be 8 characters and less";//error message
        password_error.style.color = "red";//text style to red
    }
     if(password.value === "password"){// if the password is greater than 8 
        e.preventDefault();// e variable. prevent it from subminting
        password_error.innerHTML ="Password cannot be password";//error message
        password_error.style.color = "red";//text style to red
    }
     if(password2.value !== password.value ){// if the password is less or equal to 
        e.preventDefault();// e variable. prevent it from subminting
        password2_error.innerHTML ="password do not match";//error message
        password2_error.style.color = "red";//text style to red
    }
    else{
       password2_error.innerHTML ="";  
    }
})