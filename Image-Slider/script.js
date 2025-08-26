const slides = document.querySelectorAll(".slides");

let counter = 0;

slides.forEach((slide, index) =>{
    slide.style.left =`${index * 100}%`;
})
