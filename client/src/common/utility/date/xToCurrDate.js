//utility
import { DateBuilder } from "./dateBuilder";

// creates an array of dates num days back from the current date
// starts from earliest date to latests date which would be the current date
function xToCurrDate(num) {
  let output = [];

  // starts on current date
  let date = new DateBuilder();

  for (let i = num; i !== -1; i--) {
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

export { xToCurrDate };
