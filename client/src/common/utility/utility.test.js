import "@testing-library/jest-dom";
import { createFakeData } from "./createFakeData";

// utility
import moment from "moment";

describe("createFakeData", () => {
  describe("overallCashFlow", () => {
    const dates = [
      "7/20/23",
      "7/21/23",
      "7/22/23",
      "7/23/23",
      "7/24/23",
      "7/25/23",
      "7/26/23",
      "7/27/23",
      "7/28/23",
    ];

    test("outputs an array of objects with a date as a string and a cash value as an int", () => {
      const create = new createFakeData();
      let cashFlowByDate = create.overallCashFlow(dates);

      // overallCashFlow has the chance to generate no dates
      // this ensures there is at least 1 value in the output at all times
      while (cashFlowByDate.length === 0)
        cashFlowByDate = create.overallCashFlow(dates);

      for (let object of cashFlowByDate) {
        expect(typeof object.date).toBe("string");
        expect(typeof object.cash).toBe("number");
      }
    });

    test("cash value stays within the range of max and min", () => {
      const min = 0;
      const max = 5;

      const create = new createFakeData();
      let cashFlowByDate = create.overallCashFlow(dates, min, max);

      // overallCashFlow has the chance to generate no dates
      // this ensures there is at least 1 value in the output at all times
      while (cashFlowByDate.length === 0)
        cashFlowByDate = create.overallCashFlow(dates);

      for (let object of cashFlowByDate) {
        expect(object.cash).toBeLessThanOrEqual(max);
        expect(object.cash).toBeGreaterThanOrEqual(min);
      }
    });

    // add when convertDates is done
    // test("dates are in order and no new dates are added", () => {
    //   const create = new createFakeData();
    //   let cashFlowByDate = create.overallCashFlow(dates);

    //   // overallCashFlow has the chance to generate no dates
    //   // this ensures there is at least 1 value in the output at all times
    //   while (cashFlowByDate.length === 0)
    //     cashFlowByDate = create.overallCashFlow(dates);

    //   for (let i = 0; i < cashFlowByDate.length; i++) {
    //     // console.log(moment("7/21/23").isBefore("7/22/23"));
    //   }
    // });
  });
});
