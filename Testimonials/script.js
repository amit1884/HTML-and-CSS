const quote=document.getElementById('quote')
const name=document.getElementById('name')
const desig=document.getElementById('desig')


const arr=[
  {
    quote:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, veniam maiores pariatur repellendus corrupti fuga consequuntur neque distinctio delectus sit suscipit?',
    name:'Amit Raj',
    desig:'Software Developer Intern'
  },
  {
    quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea veniam quo tempora cum corrupti animi necessitatibus suscipit mollitia cumque?',
    name:'Mohit Kumar',
    desig:'Graphic Designer'
  },
  {
    quote:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse modi fugit tempore neque ad est quod quisquam repudiandae, enim repellat exercitationem culpa optio in, nisi dolorum porro tenetur laudantium nihil, cupiditate id adipisci magni? Ratione esse expedita in sequi pariatur voluptates corrupti eveniet? Tenetur maiores numquam illo quaerat impedit amet?',
    name:'Aditya Kumar',
    desig:'Full Stack Developer'
  },
  {
    quote:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse modi fugit tempore neque ad est quod quisquam repudiandae, enim repellat exercitationem culpa optio in, nisi dolorum porro tenetur laudantium nihil, cupiditate id adipisci magni? Ratione esse expedita in sequi pariatur voluptates corrupti eveniet? Tenetur maiores numquam illo quaerat impedit amet?',
    name:'Abhishek Kesri',
    desig:'Software Engineer'
  },
]
let idx=1;
function testimonials(){
  
  quote.innerHTML=arr[idx].quote;
  name.innerHTML=arr[idx].name
  desig.innerHTML=arr[idx].desig

idx++
  if(idx>arr.length-1)
  idx=0;
  

}

setInterval(testimonials,10000)