import sortData from "./data.js";
import data from "./data/got.js";

const got = data.got;
console.log(got);

const alfabeticOrder = document.getElementById("order-selector");

alfabeticOrder.addEventListener("change", function () {
  const orderValue = alfabeticOrder.value;
  sortData(got, "firstName", orderValue);
});
