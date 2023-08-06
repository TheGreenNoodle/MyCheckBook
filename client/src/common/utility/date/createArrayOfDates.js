//utility
import { DateBuilder } from "./dateBuilder";

// creates an array of dates x number of days back from the current date
// input is the number of days you want to go back from the current date
// the array starts at the earliest date and goes all the way up to the current date

// store as a date as unix code
function createArrayOfDates(daysBack) {
  let output = [];

  // starts on current date
  let date = new DateBuilder();

  for (let i = daysBack; i !== 0; i--) {
    output.push(date.currDate);

    // subtract 1 from day
    date.decrementDay();

    if (date.day === 0) {
      date.decrementMonth();

      // if we go through the whole year
      if (date.month === 0) {
        date.decrementYear();
        date.resetMonth();
      }

      date.setDayToEndOfMonth();
    }

    date = new DateBuilder(date.month, date.day, date.fullYear);
  }

  output = output.reverse();

  return output;
}

export { createArrayOfDates };
