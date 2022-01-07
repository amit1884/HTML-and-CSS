const navs=document.querySelectorAll('.nav')
const open_btn=document.querySelector('.open-btn')
const close_btn=document.querySelector('.close-btn')

open_btn.addEventListener('click',()=>{

  console.log('open')
  navs.forEach(nav=>nav.classList.add('active'))
})

close_btn.addEventListener('click',()=>{

  navs.forEach(nav=>nav.classList.remove('active'))
})