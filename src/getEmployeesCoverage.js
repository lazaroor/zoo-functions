const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function verifyName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    firstName.includes(employeeName) || lastName.includes(employeeName));
}

function verifyID(employeeID) {
  return employees.find(({ id }) => id.includes(employeeID));
}

function getNameBySpecie() {

}

function getLocationBySpecie(...specieID) {
  return species.reduce((accumulator, currSpecie) => {
    if (currSpecie.id === specieID[0]) {
      accumulator.push(currSpecie.location);
    }
    return accumulator;
  }, []);
  // const result = [];
  // species.forEach((specie) => {
  //   if (specie.id === specieID[0]) { result.push(specie.location); }
  // });
  // return result;
}

console.log(getLocationBySpecie('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getEmployeesCoverage(employeeInfo) {
  if (!verifyName(employeeInfo) && !verifyID(employeeInfo)) {
    return employees;
  }

  return 0;
}

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
