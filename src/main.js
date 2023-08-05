import sortData from "./data.js";
import data from "./data/got.js";

const got = data.got;
console.log(got);

const cardsContainer = document.getElementById("cards-container");

function fillContainer(data) {
  cardsContainer.innerHTML = data
    .map(
      (got) => `
    <div class="card">
      <h3 class="fullname-got">${got.fullName}</h3>
      <img class="image-got" src=${got.imageUrl} />
        <div>
          <p>Título:${got.title}</p>
          <p>Família:${got.family}</p>
          <p>Nascido em:${got.born}</p>
        </div>
    </div>
  `
    )
    .join("");
}
fillContainer(got);

const alfabeticOrder = document.getElementById("order-selector");

alfabeticOrder.addEventListener("change", function () {
  const orderValue = alfabeticOrder.value;
  fillContainer(sortData(got, "firstName", orderValue));
});
