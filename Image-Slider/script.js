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
    counter --
    slideImage()
  
    
}




const goNext = () =>{
    counter ++
    slideImage()

}


