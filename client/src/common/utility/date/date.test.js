import "@testing-library/jest-dom";

import { createArrayOfDates } from "./createArrayOfDates";
import { DateBuilder } from "./dateBuilder";

describe("createArrayOfDates", () => {
  // need a better test to make sure dates decrease in order
  test("decreases year correctly", () => {
    const output = createArrayOfDates(365);
    expect(output.length).toBe(365);

    const length = output.length - 1;

    let firstElemYear = Number(output[0].slice(output[0].length - 2));

    // gets last element of output and then the length of the element and gets the last two digits of it which contain the year
    let lastElemYear = Number(output[length].slice(output[length].length - 2));

    expect(firstElemYear).toEqual(lastElemYear - 1);
  });

  // add when convertDates is done
  test("dates are in order form smallest to largest", () => {});
});

// needs refactoring
describe("dateBuilder", () => {
  const time = new Date();
  class currentDate {
    constructor(
      month = time.getMonth() + 1,
      day = time.getDate(),
      fullYear = time.getFullYear()
    ) {
      this.month = month;
      this.day = day;
      this.fullDate = `${month}/${day}/${fullYear}`;
    }

    makeDayDoubleDigit() {
      this.day = `0${this.day}`;
    }

    makeMonthDoubleDigit() {
      this.month = `0${this.month}`;
    }
  }

  test("date is in MM/DD/YYYY format", () => {});
  test("starts on current date", () => {
    const date = new DateBuilder();

    const curr = new currentDate();

    if (curr.month < 10) curr.makeMonthDoubleDigit();
    if (curr.day < 10) curr.makeDayDoubleDigit();

    expect(date.getCurrDate()).toEqual(curr.fullDate);
  });
});
