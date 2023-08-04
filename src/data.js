export const nomesFiltro = (dados, nomeBuscar) => {
  return dados.filter(personagem => personagem.name === nomeBuscar);
};

