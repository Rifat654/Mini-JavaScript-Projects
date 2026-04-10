const quote_wapper = document.querySelector('.quote_wapper');
const btn = document.querySelector('.btn');
const p = document.querySelector('.quote');

// API URL
const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

// async  function to fetch quote
const getQuote = async function () {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data);
        p.textContent = data[0];

    }
    catch (e) {
        console.log(e, "error");
    }
}

// Event Listener
btn.addEventListener("click", () => {
    p.textContent = "Loading....."; // 
    getQuote(); // just call function
});