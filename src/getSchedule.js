const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const weekDays = Object.keys(hours);

// Participei da monitoria com o Imar 26/01 e Lalá dia 27/01 que me ajudaram no requisito
const weekSchedule = () => weekDays.reduce((acc, currDay) => {
  if (currDay !== 'Monday') {
    acc[currDay] = {
      officeHour: `Open from ${hours[currDay].open}am until ${hours[currDay].close}pm`,
      exhibition: species.filter(({ availability }) =>
        availability.includes(currDay)).map(({ name }) => `${name}`),
    };
  } else {
    acc[currDay] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return acc;
}, {});

function isDay(dayTarget) {
  return weekDays.some((day) => (day === dayTarget));
}

function getDaySchedule(dayTarget) {
  const schedule = {};
  const fullSchedule = weekSchedule();
  if (dayTarget === 'Monday') schedule[dayTarget] = fullSchedule.Monday;
  else schedule[dayTarget] = fullSchedule[dayTarget];
  return schedule;
}

function isAnimal(animalTarget) {
  return species.map((element) => element.name).some((animal) => (animalTarget === animal));
}

function getAnimalSchedule(animalTarget) {
  return species.find((specie) => specie.name === animalTarget).availability;
}

function getSchedule(scheduleTarget) {
  if (isDay(scheduleTarget)) return getDaySchedule(scheduleTarget);
  if (isAnimal(scheduleTarget)) return getAnimalSchedule(scheduleTarget);
  return weekSchedule();
}

module.exports = getSchedule;
