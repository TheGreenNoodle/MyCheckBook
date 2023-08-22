const { faker } = require("@faker-js/faker");

class createFakeData {
  // creates a random money value for the dates inputted. Some dates wont be in the output if randInt is less than 6.
  // simulates how data will be coming in from data base
  // output is an array of objects.
  // Example output : [{date: randomDate, cash: randVal}]
  overallCashFlow(dates, cashMin = 1, cashMax = 100) {
    const output = [];

    for (let date of dates) {
      // gets a random number between 0 and 10
      const randomInt = faker.number.int(10);

      if (6 < randomInt) {
        output.push({
          date: date,
          cash: Number(
            faker.finance.amount({
              min: cashMin,
              max: cashMax,
            })
          ),
        });
      }
    }

    return output;
  }
}

export { createFakeData };
