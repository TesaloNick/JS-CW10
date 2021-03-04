const sliderContainer = document.getElementById('image-container')
const imageRow = document.querySelector('section')
const mainImageContainer = document.querySelector('.main-img-container')
const mainImage = document.querySelector('.main-img')
const pagination = document.querySelector('.pagination')

const slides = new Array(10)
slides.fill('')                     // наполнить массив хоть чем-то, чтобы перебрать массив в последующем
const arrSlides = [];        // массив с картинками внизу
const arrPaginationDot = [];        // массив с картинками внизу
let counter = 0;

slides.forEach((slide, index) => {  // slides.map((slide, index)
    slide = new Image(240)          // создает картинку с шириной 300
    slide.src = `images/${index+1}.jpg`
    slide.style.opacity = '0.5'
    sliderContainer.appendChild(slide)
    let paginationDot = document.createElement('div')
    paginationDot.classList.add(`dot${index+1}`)
    paginationDot.addEventListener('click', () => {                     // выведение картинки наверх
        mainImage.setAttribute('src', `images/${index+1}.jpg`)
        counter = index
        sliderContainer.style.transform = `translate3d(-${index*240}px, 0, 0)`
        arrSlides[counter].style.opacity = '1'
        if ()
        // arrSlides[counter-1].style.opacity = '0.5'
        arrPaginationDot[counter].style.backgroundColor = 'black'
        // arrPaginationDot[counter-1].style.backgroundColor = 'white'
    })
    pagination.appendChild(paginationDot)
    arrSlides.push(slide)
    arrPaginationDot.push(paginationDot)
})
arrSlides[0].style.opacity = '1'
arrPaginationDot[0].style.backgroundColor = 'black'

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
        sliderContainer.style.transform = `translate3d(-${counter*240}px, 0, 0)`  // sliderContainer.style.margin = `-${STEP*300}px`
        arrSlides[counter].style.opacity = '1'
        arrSlides[counter-1].style.opacity = '0.5'
        arrPaginationDot[counter].style.backgroundColor = 'black'
        arrPaginationDot[counter-1].style.backgroundColor = 'white'
    }
    setTimeout(change, 200)
}

function slideLeft() {
    if (counter === 0) {
        arrowLeft.style.opacity = 0.3;
        arrowLeft.style.pointerEvent = 'none';
    } else {
        --counter
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
        sliderContainer.style.transform = `translate3d(-${counter*240}px, 0, 0)`
        arrSlides[counter].style.opacity = '1'
        arrSlides[counter+1].style.opacity = '0.5'
        arrPaginationDot[counter].style.backgroundColor = 'black'
        arrPaginationDot[counter+1].style.backgroundColor = 'white'
    }
    setTimeout(change, 200)

}
