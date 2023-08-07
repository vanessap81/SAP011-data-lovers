export const nomesFiltro = (dados, nomeBuscar) => {
  return dados.filter(personagem => personagem.name.toUpperCase().includes(nomeBuscar.toUpperCase()))
};

