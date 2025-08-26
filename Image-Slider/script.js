const slides = document.querySelectorAll(".slides");

let counter = 0;

slides.forEach((slide, index) =>{
    slide.style.left =`${index* 100}%`;
})


const slideImage = () =>{
    slides.forEach((slide) =>{
        slide.style.transform = `translateX(-${counter* 100}%)`;
    })
}


// sliding functions //
const goPrev = () =>{
    //  counter = (counter - 1 + slides.length) % slides.length;
    counter  = counter === 0 ? slides.length -1 : counter - 1;
    slideImage()
  
    
}




const goNext = () =>{
    //   counter = (counter + 1) % slides.length;
    counter  = counter === slides.length  -1 ? 0 : counter + 1;
    slideImage()

}


