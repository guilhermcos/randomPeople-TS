import peopleRepository from "../repositories/people.repositories";
import utils from "../utils/shuffleName";

async function getPerson() {
  const count = await peopleRepository.getPeopleCount();
  const id: number = utils.shuffleName(count);
  const person = await peopleRepository.getById(id);

  return person;
}

const peopleService = {
  getPerson,
};

export default peopleService;
