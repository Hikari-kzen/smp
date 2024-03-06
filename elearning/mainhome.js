const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

// Set the initial activeSlideIndex to the last slide
let activeSlideIndex = slidesLength-1

// Calculate the initial position of slideLeft
slideLeft.style.top = `-${activeSlideIndex * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'down') {
        if (activeSlideIndex === slidesLength - 1) {
            activeSlideIndex = slidesLength - 2; // Go to second last slide from last slide
        } else if (activeSlideIndex === slidesLength - 2) {
            activeSlideIndex = 0; // Go to first slide from second last slide
        } else if (activeSlideIndex === 0) {
            activeSlideIndex = slidesLength - 1; // Go back to last slide from first slide
        }
    } else if (direction === 'up') {
        if (activeSlideIndex === 0) {
            activeSlideIndex = 1; // Go to second slide from first slide
        } else if (activeSlideIndex === 1) {
            activeSlideIndex = slidesLength - 1; // Go back to last slide from second slide
        } else {
            activeSlideIndex--; // Move to previous slide
        }
    }

    // Move left and right slides according to updated activeSlideIndex
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
