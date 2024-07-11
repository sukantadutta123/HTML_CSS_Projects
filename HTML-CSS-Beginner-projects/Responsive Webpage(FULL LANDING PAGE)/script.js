const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open')
        }


// arrow Slider
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const imgSlider = document.querySelector('.img-slider');
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.img-slider .slide');
    const totalSlides = slides.length;
    
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    imgSlider.style.transform = `translateX(${offset}%)`;
}

function handleLeftArrowClick() {
    showSlide(currentIndex - 1);
}

function handleRightArrowClick() {
    showSlide(currentIndex + 1);
}

leftArrow.addEventListener('click', handleLeftArrowClick);
rightArrow.addEventListener('click', handleRightArrowClick);
