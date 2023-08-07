import sortData from "./data.js";
import filterData from "./data.js";
import data from "./data/got.js";

const got = data.got;

const cardsContainer = document.getElementById("cards-container");

function fillContainer(data) {
  cardsContainer.innerHTML = data
    .map(
      (got) => `
    <div class="card">
      <h3 class="fullname-got">${got.fullName}</h3>
      <img class="image-got" src=${got.imageUrl} />
        <div id="p-wrap">
          <p><strong>Título: </strong>${got.title}</p>
          <p><strong>Família: </strong>${got.family}</p>
          <p><strong>Nascido em: </strong>${got.born}</p>
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

const searchFamily = document.getElementById("family-selector");

searchFamily.addEventListener("change", function () {
  const familyValue = searchFamily.value;
  fillContainer(filterData(got, familyValue));
});

// searchFamily.addEventListener("change", function () {
//   const familyValue = searchFamily.value;
//   console.log(familyValue);
// });

// console.log(filterData(got, "Stark"));
