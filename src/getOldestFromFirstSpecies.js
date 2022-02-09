const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// feito com ajuda da Veronica corrigido erro do lint
function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id);
  let animalID = species.find((element) => element.id === employee.responsibleFor[0]);
  animalID = animalID.residents;
  const finalObject = animalID.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(finalObject);
}

module.exports = getOldestFromFirstSpecies;
