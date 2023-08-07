// import { example } from "./data.js";
// console.log(example, data);

import { nomesFiltro } from "./data.js";
import data from "./data/got.js";

// formato de objeto para transformar em formato de array para facilitar a manipulação
const dadosGot = Object.values(data.got);

const conteudo = document.getElementById ("cards-container");
function cardsTela (data) {
  conteudo.innerHTML = data.map((got) => `
  <div class="card">
      <h3 class="fullname-got"> ${got.fullName}</h3>
      <img class="image-got" src="${got.imageUrl}"/>

      <div id="p-wrap">
          <p><strong>Título: </strong>${got.title}</p>
          <p><strong>Família: </strong>${got.family}</p>
          <p><strong>Nascido em: </strong>${got.born}</p>
      </div>
    </div>
  `).join ('');
}
cardsTela(dadosGot);

const campoBuscar = document.getElementById("name-search");
campoBuscar.addEventListener("input", event => {
  const nomeDoPersonagem = event.target.value;
  const filtrarPersonagem = nomesFiltro(dadosGot, nomeDoPersonagem);
  cardsTela(filtrarPersonagem);
});