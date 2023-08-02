// import { example } from "./data.js";
// console.log(example, data);

import data from "./data/got.js";

// const orderSelector = document.getElementById("order-selector");
// const familySelector = document.getElementById("family-selector");
// const nameSearch = document.getElementById("name-search");
// const percent = document.getElementById("statistics");
const cardsContainer = document.getElementById("cards-container");
const got = data.got;

const Cards = (data) => {
  cardsContainer.innerHTML = data
    .map(
      (got) =>
        `
        <div class="card">
            <h3 class="fullname-got"> ${got.fullName}</h3>
            <img class="image-got" src=${got.imageUrl} />
            <div class="content-card">
                <p><strong>Título:</strong> ${got.title}</p>
                <p><strong>Família:</strong> ${got.family}</p>
                <p><strong>Nascido em:</strong> ${got.born}</p>
            </div>
        </div>
        `
    )
    .join("");
};
