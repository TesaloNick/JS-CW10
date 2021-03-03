const sliderContainer = document.getElementById('image-container')
const mainContainer = document.querySelector('.image-container')

const slides = new Array(10)
slides.fill('')                     // наполнить массив хоть чем-то, чтобы перебрать массив в последующем


slides.forEach((slide, index) => {  // slides.map((slide, index)
    slide = new Image(200)          // создает картинку с шириной 300
    slide.src = `images/${index+1}.jpg`
    sliderContainer.appendChild(slide)
})
const arrowLeft = document.createElement('span')
const arrowRight = document.createElement('span')

const drawArrows = () => {          // рисуем стрелив влево и вправо
    arrowLeft.innerHTML = '<'
    mainContainer.prepend(arrowLeft)
    arrowRight.innerHTML = '>'
    mainContainer.appendChild(arrowRight)
    arrowRight.addEventListener('click', slideRight)
    arrowLeft.addEventListener('click', slideLeft)
}

drawArrows()

let STEP = 0;
function slideRight() {
    if (STEP === slides.length-8) {              // блокировать движение вправо
        arrowRight.style.opacity = 0.5;
        arrowRight.style.pointerEvent = 'none';
    } else {
        ++STEP
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
        sliderContainer.style.transform = `translate3d(-${STEP*300}px, 0, 0)`  // sliderContainer.style.margin = `-${STEP*300}px`
    }
    console.log(STEP);

}
function slideLeft() {
    if (STEP === 0) {
        arrowLeft.style.opacity = 0.5;
        arrowLeft.style.pointerEvent = 'none';
    } else {
        --STEP
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
        sliderContainer.style.transform = `translate3d(-${STEP*300}px, 0, 0)`
    }
    console.log(STEP);
}
