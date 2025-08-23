const slider = document.querySelector(".slider");


async function fetchImages() {
    try{

        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10", {
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

    slider.style.width = "300px";
    slider.style.height = "300px";
    slider.innerHTML = getImgList.map((item) => `
        <div class="slide">
        
        <img  src="${item.download_url}" alt="Image by ${item.author}" />
        </div>
        `)
}


fetchImages();