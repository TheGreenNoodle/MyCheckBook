import "@testing-library/jest-dom";
import { generateTrend } from "./generateTrend";

describe("generateTrend.js", () => {
  const datasets = [
    {
      data: [
        { date: "07/21/23", cash: 44.68 },
        { date: "07/22/23", cash: 28.32 },
        { date: "07/23/23", cash: 95.51 },
        { date: "07/25/23", cash: 9 },
        { date: "07/28/23", cash: 50.81 },
      ],
    },
  ];

  test("changes date key to x and cash key to y", () => {
    const trendBuilder = new generateTrend(datasets);
    const trend = trendBuilder.generateTrend();

    for (let object of trend[0].data) {
      expect(object).toHaveProperty("x");
      expect(object).toHaveProperty("y");
      expect(object).not.toHaveProperty("date");
      expect(object).not.toHaveProperty("cash");
    }
  });

  test("dates are ordered from earliest to latest", () => {
    const trendBuilder = new generateTrend(datasets);
    const trend = trendBuilder.generateTrend();

    for (let [index, object] of trend[0].data.entries()) {
      expect(object.x).toEqual(datasets[0].data[index].date);
    }
  });

  test("y accumulates all previous values from cash up to the current index", () => {
    const trendBuilder = new generateTrend(datasets);
    const trend = trendBuilder.generateTrend();

    let cashSum = 0;
    for (let [index, object] of trend[0].data.entries()) {
      cashSum += datasets[0].data[index].cash;
      cashSum = Math.round(cashSum * 100) / 100;

      expect(object.y).toEqual(cashSum);
    }
  });
});

// test chart.js line and pie graph somehow
