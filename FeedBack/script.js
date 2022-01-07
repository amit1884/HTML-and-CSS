const ratings=document.querySelectorAll('.rating')
const ratingContainer=document.querySelector('.ratings-container')
const send=document.querySelector('#send')

const panel=document.querySelector('#panel')

let selectedRating='Satisfied'
// Event Bubbling
ratingContainer.addEventListener('click',(e) => {

  // console.log(e.target)

  if(e.target.parentNode.classList.contains('rating')){

    // console.log(e.target)

    removeActive()
    e.target.parentNode.classList.add('active')

    selectedRating=e.target.nextElementSibling.innerHTML
    // console.log(selectedRating)


  }
})


send.addEventListener('click',(e)=>{
  panel.innerHTML=`
  <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br/>
    <strong>FeedBack : ${selectedRating}</strong>
    <p>We wil use your feedback to improve our customer service</p>
  `
})

function removeActive(){

  for(let i=0;i<ratings.length;i++){
    ratings[i].classList.remove('active')
  }
}


