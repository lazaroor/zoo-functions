const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // refatorar essa função
  const animalFilter = data.species.find((animals) => animals.name === animal);
  const resultado = animalFilter.residents.map((elemento) => (elemento.age >= age));
  return resultado.every((currentAge) => currentAge === true);
}

module.exports = getAnimalsOlderThan;
