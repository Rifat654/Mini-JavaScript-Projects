// const a = "Rifat";

// const b = new String("Rifat");

// console.log(a == b);

// console.log(a === b);

// console.log(typeof b);
// console.log(typeof NAN);

// taking data from Data.js file
import Data from "./Data.js";

const cardContainer = document.querySelector(".card");


function renderCards() {
    if (!cardContainer) return;

    cardContainer.innerHTML = Data.map((item) => {
        return `
            <div class="card-item" id="card-${item.id}">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>$${item.price}</p>
                <button class="btn">${item.btn}</button>
            </div>
        `
    }).join("");
};

renderCards();

// function func({ name, img, price } = Data[0]) {
//     console.log(name, img, price);
// }

// btn.addEventListener("click", () => {
//     renderCards();
//     func();
// });

// renderCards();

