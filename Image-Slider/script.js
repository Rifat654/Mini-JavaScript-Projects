// selecting  elements
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container")

async function fetchImages() {
    try{

        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=5", {
            method: "GET"
        });

        const imgList = await response.json();
        if (imgList &&  imgList.length > 0) displayImage(imgList)
        console.log(imgList);
        

    }catch(error){
        console.log(`Error fetching images: ${error}`);
        
    }
}


function displayImage( getImgList) {

  
    slider.innerHTML = getImgList.map((item) => `
        <div class="slide">
        
        <img  src="${item.download_url}" alt=${item.id}" />
        </div>
        `).join(" ")

        dotsContainer.innerHTML = getImgList.map((item, index) => `
         <span class ="dot ${index === 0 ? 'active' : ''}" data-slide=${index} ></span>
        `).join(" ")
}


fetchImages();

// main slider functionality



setTimeout(() =>{


const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

console.log(slides);


  function handleImageSlider(){

    function activeDot() {
        document.querySelectorAll(".dot").forEach(dotItem => dotItem.classList.remove("active"));
        document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add("active");
    }

    function changeCurrentSlide(slideIndex) {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });
    }

    // initialize first slide
    changeCurrentSlide(currentSlide);
    activeDot();

    nextBtn.addEventListener("click", () => {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        changeCurrentSlide(currentSlide);
        activeDot();
    });

    prevBtn.addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        changeCurrentSlide(currentSlide);
        activeDot();
    });
}
handleImageSlider();

}, 1000)
 

