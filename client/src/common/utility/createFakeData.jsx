const { faker } = require("@faker-js/faker");

class createFakeData {
  // make this function take in a start date and how many days back it needs to create data for because having a date and null is not good for testing. We want to simulate random dates and values for those dates as they would be stored in the DB. We aren't going to be storing the entire month of dates and a null value for those dates if there was no input on that day.

  // the problem with this test function is that it outputs an object of already sorted dates. The data base can`t just use an object to store data because an object is an unsorted data structure. We can`t use an unsorted data structure on the data base to store data because we can`t assume the user will put in data for certain dates in order. They may go back and update a past report and that would put the whole thing out of order. So basically this function needs to return what the data base would return and the data bases needs to use a data structure that can be sorted and hold dates and the values for those dates.

  // return this [{date: cash}, {date: cash}]. Ordered by date value.
  cashFlow(dates, cashMin, cashMax) {
    const output = [];

    for (let date of dates) {
      const randomInt = faker.number.int(10);

      if (3 < randomInt) {
        output.push({
          [date]: Number(
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
