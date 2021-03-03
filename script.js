const sliderContainer = document.getElementById('image-container')
const imageRow = document.querySelector('section')
const mainImageContainer = document.querySelector('.main-img-container')
const mainImage = document.querySelector('.main-img')

const slides = new Array(10)
slides.fill('')                     // наполнить массив хоть чем-то, чтобы перебрать массив в последующем
const arr = []
slides.forEach((slide, index) => {  // slides.map((slide, index)
    slide = new Image(200)          // создает картинку с шириной 300
    slide.src = `images/${index+1}.jpg`
    // console.log(slide);
    sliderContainer.appendChild(slide)
    arr.push(slide)

})
console.log(arr);
const arrowLeft = document.createElement('img')
arrowLeft.setAttribute('src', 'images/left.png')
arrowLeft.classList.add('arrow')
const arrowRight = document.createElement('img')
arrowRight.setAttribute('src', 'images/right.png')
arrowRight.classList.add('arrow')

const drawArrows = () => {                   // рисуем стрелки влево и вправо
    mainImageContainer.prepend(arrowLeft)
    mainImageContainer.appendChild(arrowRight)
}
drawArrows()
arrowRight.addEventListener('click', slideRight)
arrowLeft.addEventListener('click', slideLeft)

let counter = 0;
let change = function() {                     // выведение картинки наверх
    mainImage.setAttribute('src', `images/${counter+1}.jpg`)
}
function slideRight() {
    if (counter === slides.length-1) {              // блокировать движение вправо
        arrowRight.style.opacity = 0.3;
        arrowRight.style.pointerEvent = 'none';
    } else {
        ++counter
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
        sliderContainer.style.transform = `translate3d(-${counter*300}px, 0, 0)`  // sliderContainer.style.margin = `-${STEP*300}px`
    }
    setTimeout(change, 300)
    // mainImage.setAttribute('src', `images/${counter+1}.jpg`);
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
    setTimeout(change, 300)

}
// setTimeout(slideLeft, 1000)
