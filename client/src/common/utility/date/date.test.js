import "@testing-library/jest-dom";

import { createArrayOfDates } from "./createArrayOfDates";
import { DateBuilder } from "./dateBuilder";

// API for working with dates and times
import moment from "moment";

// needs refactoring
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
  const date = new Date();
  class mockDateBuilder {
    constructor(
      month = date.getMonth() + 1,
      day = date.getDate(),
      fullYear = date.getFullYear()
    ) {
      this.month = month;
      this.day = day;
      this.fullYear = fullYear;
      this.fullDate = `${month}/${day}/${fullYear}`;
    }

    #setCurrDate() {
      this.fullDate = `${this.month}/${this.day}/${this.fullYear}`;
    }
    getCurrDate() {
      if (this.month < 10) this.month = `0${this.month}`;
      if (this.day < 10) this.day = `0${this.day}`;
      this.#setCurrDate();

      return this.fullDate;
    }
  }

  test("date is in MM/DD/YYYY format", () => {
    const productionBuilder = new DateBuilder();

    expect(
      moment(productionBuilder.getCurrDate(), "MM-DD-YYYY").isValid()
    ).toBe(true);
  });

  test("starts on current date", () => {
    const productionBuilder = new DateBuilder();
    const mockBuilder = new mockDateBuilder();

    expect(productionBuilder.getCurrDate()).toEqual(mockBuilder.getCurrDate());
  });

  test("when day or month is less than 10 a zero is added to the front of the value", () => {
    const mockBuilder = new mockDateBuilder(6, 5, 2023);
    const productionBuilder = new DateBuilder(6, 5, 2023);

    expect(productionBuilder.getCurrDate()).toEqual(mockBuilder.getCurrDate());
  });

  test("helper methods update parameters as intended", () => {
    const originalValues = {
      month: 6,
      day: 5,
      fullYear: 2023,
    };
    const productionBuilder = new DateBuilder(6, 5, 2023);

    productionBuilder.decrementMonth();
    expect(originalValues.month - 1 === productionBuilder.month).toBe(true);

    productionBuilder.decrementDay();
    expect(originalValues.day - 1 === productionBuilder.day).toBe(true);

    productionBuilder.decrementYear();
    expect(originalValues.fullYear - 1 === productionBuilder.fullYear).toBe(
      true
    );

    productionBuilder.resetMonth();
    expect(productionBuilder.month).toEqual(12);

    productionBuilder.setDayToEndOfMonth();
    expect(productionBuilder.day).toEqual(
      moment(
        `${productionBuilder.fullYear}-${productionBuilder.month}`,
        "YYYY-MM"
      ).daysInMonth()
    );
  });
});
