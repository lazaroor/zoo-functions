const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((person) => {
    let resultado;
    if (employeeName === person.firstName || employeeName === person.lastName) {
      resultado = person;
    }
    return resultado;
  });
}

module.exports = getEmployeeByName;
