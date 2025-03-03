import { sortData, filterData, computeStats, filterNames } from "./data.js";
import data from "./data/got.js";

const got = data.got;

const cardsContainer = document.getElementById("cards-container");

function fillContainer(data) {
  cardsContainer.innerHTML = data
    .map(
      (got) => `
        <li class="card">
          <h3 class="fullname-got">${got.fullName}</h3>
          <img class="image-got" src=${got.imageUrl} />
            <div>
              <p><strong>Título: </strong>${got.title}</p>
              <p><strong>Família: </strong>${got.family}</p>
              <p><strong>Nascido em: </strong>${got.born}</p>
            </div>
        </li>
      `
    )
    .join("");
}

const alfabeticOrder = document.getElementById("order-selector");
alfabeticOrder.addEventListener("change", function () {
  const orderValue = alfabeticOrder.value;
  fillContainer(sortData(got, "firstName", orderValue));
});

const searchFamily = document.getElementById("family-selector");
const familyStats = document.getElementById("statistics");
searchFamily.addEventListener("change", function () {
  const familyValue = searchFamily.value;
  fillContainer(filterData(got, familyValue));
  const familyAmount = filterData(got, familyValue);
  const familyMembers = computeStats(familyAmount);
  familyStats.innerHTML = `Essa família corresponde a ${familyMembers}% do total de personagens`;
  familyStats.style.display = "block";
  familyStats.style.color = "silver";
});

const searchPersonagem = document.getElementById("search-div");
searchPersonagem.addEventListener("input", (event) => {
  const nomePersonagem = event.target.value;
  const buscarPersonagem = filterNames(got, nomePersonagem);
  fillContainer(buscarPersonagem);
});

const btnTodosPersonagem = document.getElementById("clear-search");
btnTodosPersonagem.addEventListener("click", function () {
  location.reload();
});

const backToTop = document.querySelector("#back-to-top");
backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
