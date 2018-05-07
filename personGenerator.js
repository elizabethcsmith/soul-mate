const faker = require('faker');

function generatePerson() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    avatar: faker.image.avatar(),
    job: faker.name.jobTitle(),
    pickUpLine: faker.hacker.phrase(),
    friends: Math.round(Math.random() * (250 - 1) + 1),
    createdAt: Math.round(Math.random() * (2018 - 2010) + 2010),
    address: {
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode()
    }
  };
}

function generatePeople(num) {
  const people = [];
  for(var i = 1; i <= num; i++) {
    const person = generatePerson();
    person.id = i;
    people.push(person);
  }
  return people;
}

module.exports = generatePerson;
