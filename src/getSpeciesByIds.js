const data = require('../data/zoo_data');

// exercício realizado na mentoria técnica
// cria array vazio e coloca todo objeto que for igual ao ID passado retornando o array

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((specie) => result.push(data.species.find((specieFind) => specieFind.id === specie)));
  return result;
}

module.exports = getSpeciesByIds;
