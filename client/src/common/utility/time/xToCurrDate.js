//utility
import { DateBuilder } from "./DateBuilder";

function xToCurrDate(num) {
  let output = [];

  // starts on current date
  let date = new DateBuilder();

  // while num is not -1
  while (num !== -1) {
    // push currDate to array
    output.push(date.currDate);

    // subtract 1 from num and 1 from day
    date.decrementDay();
    num--;

    // if day === 0 set day equal to days in pervious month
    if (date.day === 0) {
      date.decrementMonth();

      // if we go through the whole year
      if (date.month === 0) {
        date.decrementYear();
        date.resetMonth();
      }

      date.setDayToEndOfMonth();
    }

    // set date to updated values
    date = new DateBuilder(date.month, date.day, date.fullYear);
  }

  // flip function
  output = output.reverse();

  return output;
}

export { xToCurrDate };
