const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const entrantss = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const peopleQuantity = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) peopleQuantity.child += 1;
    else if (element.age >= 18 && element.age < 50) peopleQuantity.adult += 1;
    else if (element.age >= 50) peopleQuantity.senior += 1;
  });
  return peopleQuantity;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const people = countEntrants(entrants);
  let finalValue = 0;
  finalValue = people.child * prices.child;
  finalValue += people.adult * prices.adult + people.senior * prices.senior;
  // people.forEach(({ child, adult, senior }) => {
  //   finalValue = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  // });
  return finalValue;
}

calculateEntry(entrantss);

module.exports = { calculateEntry, countEntrants };
