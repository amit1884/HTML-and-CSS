const sliderContainer=document.querySelector('.slider-container')
const slideRight=document.querySelector('.right-slide')

const slideLeft=document.querySelector('.left-slide')

const up_btn=document.querySelector('.up-btn')
const down_btn=document.querySelector('.down-btn')

const slideLength=slideRight.querySelectorAll('div').length

console.log(slideLength)

let activeSlideIndex=0

slideLeft.style.top = `-${(slideLength-1)*100}vh`

up_btn.addEventListener('click',()=>changeSlide('up'))
down_btn.addEventListener('click',()=>changeSlide('down'))

function changeSlide(direction){

  console.log('clicked',direction)

  const sliderHeight=sliderContainer.clientHeight

  console.log(sliderHeight)

  if(direction==='up'){

    activeSlideIndex++;
    if(activeSlideIndex > slideLength-1){
      activeSlideIndex=0
    }
  }
  else if(direction==='down'){
    activeSlideIndex--;
    if(activeSlideIndex < 0){
      activeSlideIndex=slideLength-1
    }
  }
  console.log(activeSlideIndex*sliderHeight)

  console.log(slideRight)
  slideRight.style.transform=`translateY(-${activeSlideIndex*sliderHeight}px)`
  slideLeft.style.transform=`translateY(${activeSlideIndex*sliderHeight}px)`
  
}


