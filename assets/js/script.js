'use strict';

// Add event listener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);

        
    }
}

// Mobile Navbar Toggler
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

// Header Animation
// When scrolled down to 100px header will be active
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }

    else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
})

// Slider

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevbtn = document.querySelector("[data-slider-prev]");
const sliderNextbtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;   

let currentSlidePos = 0;

const  moveSliderItems = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`
}

// Next slide

const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
        currentSlidePos = 0;
    }

    else {
        currentSlidePos++;
    }

    moveSliderItems();
}

sliderNextbtn.addEventListener("click", slideNext);

// Previous slide

const slidePrev = function () {

    if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
    }

    else {
        currentSlidePos--;
    }

    moveSliderItems();
}

sliderPrevbtn.addEventListener("click", slidePrev);

// Responsive

window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItems();
})
