const sliderContainer = document.getElementById('image-container')

const slides = new Array(10)
slides.fill('')                     // наполнить массив хоть чем-то, чтобы перебрать массив в последующем


slides.forEach((slide, index) => {  // slides.map((slide, index)
    slide = new Image(300)
    slide.src = `images/${index+1}.jpg`
    sliderContainer.appendChild(slide)
})

const drawArrows = () => {
    const arrowLeft = document.createElement('span')
    arrowLeft.innerHTML = '<'
    sliderContainer.prepend(arrowLeft)
    const arrowRight = document.createElement('span')
    arrowRight.innerHTML = '>'
    sliderContainer.appendChild(arrowRight)
    arrowRight.addEventListener('click', slideRight)
    arrowLeft.addEventListener('click', slideLeft)
}

drawArrows()
let STEP = 0;

function slideRight() {
    console.log(sliderContainer.querySelector('img'));
    ++STEP
    sliderContainer.style.marginLeft = `-${STEP*300}px`
}
function slideLeft() {
    console.log(sliderContainer.querySelector('img'));
    --STEP
    sliderContainer.style.marginLeft = `${-STEP*300}px`
}
