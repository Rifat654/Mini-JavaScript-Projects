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
         <span class = "dots"data-slide=${index} ></span>
        `).join(" ")
}


fetchImages();