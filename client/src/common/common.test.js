import "@testing-library/jest-dom";
import { generateTrend } from "./charts/generateTrend";

describe("generateTrend.js", () => {
  const spendingData = [
    {
      data: [
        { date: "7/21/23", cash: 44.68 },
        { date: "7/22/23", cash: 28.32 },
        { date: "7/23/23", cash: 95.51 },
        { date: "7/25/23", cash: 9 },
        { date: "7/28/23", cash: 50.81 },
      ],
    },
  ];

  test("dates are in order", () => {});

  test("changes date key to x and cash key to y", () => {
    const data = new generateTrend(spendingData);

    const trend = data.generateTrend();
    const trendDataArray = trend[0].data;

    console.log(trendDataArray);
    for (let object of trendDataArray) {
      expect(object).toHave("x");
      expect(object).toHave("y");
      expect(object).not.toHave("date");
      expect(object).not.toHave("cash");
    }
  });

  test("y accumulates all previous values from previous and current date", () => {});
});
