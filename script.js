const sliderContainer = document.getElementById('image-container')
const imageRow = document.querySelector('section')
const mainImage = document.querySelector('.main-img')

const slides = new Array(10)
slides.fill('')                     // наполнить массив хоть чем-то, чтобы перебрать массив в последующем


slides.forEach((slide, index) => {  // slides.map((slide, index)
    slide = new Image(200)          // создает картинку с шириной 300
    slide.src = `images/${index+1}.jpg`
    sliderContainer.appendChild(slide)
})
const arrowLeft = document.createElement('img')
arrowLeft.setAttribute('src', 'images/left.png')
arrowLeft.classList.add('arrow')
const arrowRight = document.createElement('img')
arrowRight.setAttribute('src', 'images/right.png')
arrowRight.classList.add('arrow')

const drawArrows = () => {          // рисуем стрелив влево и вправо
    mainImage.prepend(arrowLeft)
    mainImage.appendChild(arrowRight)
    arrowRight.addEventListener('click', slideRight)
    arrowLeft.addEventListener('click', slideLeft)
}
drawArrows()

let counter = 0;
function slideRight() {
    if (counter === slides.length-8) {              // блокировать движение вправо
        arrowRight.style.opacity = 0.3;
        arrowRight.style.pointerEvent = 'none';
    } else {
        ++counter
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
        sliderContainer.style.transform = `translate3d(-${counter*300}px, 0, 0)`  // sliderContainer.style.margin = `-${STEP*300}px`
    }
    console.log(counter);

}
function slideLeft() {
    if (counter === 0) {
        arrowLeft.style.opacity = 0.3;
        arrowLeft.style.pointerEvent = 'none';
    } else {
        --counter
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
        sliderContainer.style.transform = `translate3d(-${counter*300}px, 0, 0)`
    }
    console.log(counter);
}
