import { xToCurrDate } from "./xToCurrDate";

describe("xToCurrDate", () => {
  test("decreases dates in correct order", () => {
    const output = xToCurrDate(365);
    expect(output.length).toBe(365);

    const length = output.length - 1;

    let firstElemYear = Number(output[0].slice(output[0].length - 2));

    // gets last element of output and then the length of the element and gets the last two digits of it which contain the year
    let lastElemYear = Number(output[length].slice(output[length].length - 2));

    expect(firstElemYear).toEqual(lastElemYear - 1);
  });
});
