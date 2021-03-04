const sliderContainer = document.getElementById('image-container')
const imageRow = document.querySelector('section')
const mainImageContainer = document.querySelector('.main-img-container')
const mainImage = document.querySelector('.main-img')
const pagination = document.querySelector('.pagination')
const preMainImg = document.querySelector('.pre-main-img')
const postMainImg = document.querySelector('.post-main-img')

const slides = new Array(10)
slides.fill('')                     // наполнить массив хоть чем-то, чтобы перебрать массив в последующем
const arrSlides = [];               // массив со слайдами внизу
const arrPaginationDot = [];        // массив с пагинацией
let counter = 0;

slides.forEach((slide, index) => {  // slides.map((slide, index)
    slide = new Image(230)          // создает картинку с шириной 230
    slide.src = `images/${index+1}.jpg`
    slide.style.opacity = '0.5'
    slide.style.cursor = 'pointer'
    slide.style.borderRadius = '5px'
    slide.style.margin = '0 5px'
    sliderContainer.appendChild(slide)
    let paginationDot = document.createElement('div')
    paginationDot.classList.add(`dot${index+1}`)
    let linkSlideToMain = () => {           // выведение картинки наверх по нажатию на пагинацию и слайд
        setTimeout(change, 300)
        counter = index
        sliderContainer.style.transform = `translate3d(-${index*240}px, 0, 0)`
        for (let i=0; i < arrPaginationDot.length; i++) {           // перекрасить активные и неактивные слайды и пагинацию
            if (i === counter) {
                arrSlides[counter].style.opacity = '1'
                arrPaginationDot[counter].style.backgroundColor = 'black'
            } else {
                arrSlides[i].style.opacity = '0.5'
                arrPaginationDot[i].style.backgroundColor = 'white'
            }
        }
    }
    paginationDot.addEventListener('click', linkSlideToMain)    // выведение главной картинки по клику по пагинации
    slide.addEventListener('click', linkSlideToMain)            // выведение главной картинки по клику по слайду
    pagination.appendChild(paginationDot)
    arrSlides.push(slide)
    arrPaginationDot.push(paginationDot)
})
arrSlides[0].style.opacity = '1'
arrPaginationDot[0].style.backgroundColor = 'black'

const arrowLeft = document.createElement('img')     // создаем стрелки 
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
let change = function() {                     // выведение картинки на главное изображение
    if (counter === 0) {
        preMainImg.setAttribute('src', ``)
        mainImage.setAttribute('src', `images/${counter+1}.jpg`)
        postMainImg.setAttribute('src', `images/${counter+2}.jpg`)
    } else if (counter === slides.length-1){
        postMainImg.setAttribute('src', ``)
        mainImage.setAttribute('src', `images/${counter+1}.jpg`)
        preMainImg.setAttribute('src', `images/${counter}.jpg`)
    } else {
        mainImage.setAttribute('src', `images/${counter+1}.jpg`)
        postMainImg.setAttribute('src', `images/${counter+2}.jpg`)
        preMainImg.setAttribute('src', `images/${counter}.jpg`) 
    }
}

function slideRight() {         // движение слайдов ВПРАВО по нажатию на стрелку
    if (counter === slides.length-1) {              // блокировать движение вправо
        arrowRight.style.opacity = 0.3;
        arrowRight.style.pointerEvent = 'none';
        postMainImg.setAttribute('src', ``)
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
    setTimeout(change, 300)
}

function slideLeft() {         // движение слайдов ВЛЕВО по нажатию на стрелку
    if (counter === 0) {
        arrowLeft.style.opacity = 0.3;
        arrowLeft.style.pointerEvent = 'none';
        preMainImg.setAttribute('src', ``)
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
    setTimeout(change, 300)
}
