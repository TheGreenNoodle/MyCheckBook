const { faker } = require("@faker-js/faker");

class createFakeData {
  // input is an array of dates. Output is an object with dates as the key and a random number as the key value. Is meant to simulate cashflow.
  cashFlow(dates) {
    // loop through dates and assign a random number to them as long as another random number is not 0 1 2 or 3 with the range of this number being 1-10.
    // random number assigned to date can not be less than 0 and can not be more than 3000
    // if the first random number is 1 2 or 3 assign the date as null
    const output = {};

    for (let date of dates) {
      const randomInt = faker.number.int(10);

      if (3 < randomInt) {
        output[date] = faker.finance.amount({ min: 1, max: 2000 });
      } else {
        output[date] = null;
      }
    }

    return output;
  }
}

export { createFakeData };
