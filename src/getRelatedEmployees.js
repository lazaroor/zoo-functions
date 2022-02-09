const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeesData = employees.filter(({ managers }) => managers.includes(managerId));
  return employeesData.map((teste) => `${teste.firstName} ${teste.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
