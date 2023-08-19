import "@testing-library/jest-dom";
import { createFakeData } from "./testing/createFakeData";

describe("createFakeData.jsx", () => {
  test("overall cashflow outputs dates with a fake cash amount", () => {});
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

  const data = new createFakeData();
  let cashFlow = data.overallCashFlow(dates);

  while (cashFlow.length === 0) cashFlow = data.overallCashFlow(dates);

  expect(dates).toContain(cashFlow[0].date);
  expect(typeof cashFlow[0].cash).toBe("number");
});
