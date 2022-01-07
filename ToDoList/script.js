const form=document.getElementById('form')
const input=document.getElementById('input')
const todoUl=document.getElementById('todo')

// getting local storage data
const todos=JSON.parse(localStorage.getItem('todos'))

if(todos){
  todos.forEach(todo => {
      addTodo(todo)
  });
}


form.addEventListener('submit',(e)=>{

  e.preventDefault()
  console.log('Click Submit')
  addTodo()
})

function addTodo(todo){

  let todoText=input.value
  console.log(todoText)
  if(todo){
    todoText=todo.text
  }

  if(todoText){
    const todoEl=document.createElement('li')
    if(todo && todo.completed){
      todoEl.classList.add('completed')
    }

    todoEl.addEventListener('click',()=>{
      todoEl.classList.toggle('completed')
      updateLocalStorage()
  })
    todoEl.addEventListener('contextmenu',(e)=>{
      e.preventDefault()
      todoEl.remove()
      updateLocalStorage()
    })
    todoEl.innerText=todoText
    todoUl.appendChild(todoEl)
    input.value=''

    updateLocalStorage()
  }
  
}


function updateLocalStorage(){

  // Getting all the existing Li
  todoEl=document.querySelectorAll('li')
  const todoArr=[]
  todoEl.forEach(todosEl=>{
    todoArr.push({
      text:todosEl.innerText,
      completed:todosEl.classList.contains('completed')
    })
  })

  // Updating the local storage
  localStorage.setItem('todos',JSON.stringify(todoArr))
}