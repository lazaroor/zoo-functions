const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Função finalizada com ajuda da monitoria em grupo do Roberval
function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, currEl) => {
      acc[currEl.name] = currEl.residents.length;
      return acc;
    }, {});
  }
  const specie = species.find((element) => element.name.includes(animal.specie));
  // faz verificação se foi passada a key sex, caso negativo só retorna quantidade
  if (!animal.sex) return specie.residents.length;
  // faz o filtro baseado na key sex passada e retorna a quantidade de animais do sexo
  return specie.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
