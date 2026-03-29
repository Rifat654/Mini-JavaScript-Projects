// API key
const API_key = "FsrCYYyU3IbPCCzozR5X3JZ3T1Lf0dcRHDrSPHFqPtA";
// selecting elements
const Box = document.querySelector(".search-box");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const results = document.querySelector(".results");
const ShowMore = document.querySelector(".show-more");

let keyword = "";
let page = 1;

async function searchImage() {
    try {

        keyword = input.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API_key}&per_page=13`;

        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);

        if (page === 1) {
            results.innerHTML = "";
        }
        const resultsData = data.results;
        resultsData.map((result) => {
            const img = document.createElement("img");
            img.src = result.urls.small;

            const imgLink = document.createElement("a");
            imgLink.href = result.links.html;
            imgLink.target = "_blank";

            imgLink.appendChild(img);
            results.appendChild(imgLink);

        });
        ShowMore.style.display = "block";
    }
    catch (err) {
        console.log(err);

    }

}


Box.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

ShowMore.addEventListener("click", () => {
    page++;
    searchImage();
});