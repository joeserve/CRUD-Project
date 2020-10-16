var faker = require('faker');

var database = { organisations: []};

for (var i = 1; i<= 5; i++) {
  database.organisations.push({
    id: i,
    name: faker.company.companyName(),
    status: {},
    teams: []
  });
}

console.log(JSON.stringify(database));