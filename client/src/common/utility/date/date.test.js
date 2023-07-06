import { xToCurrDate } from "./xToCurrDate";

describe("xToCurrDate", () => {
  test("reduces year by one when input is 365 or more", () => {
    const output = xToCurrDate(365);

    const length = output.length - 1;

    let firstElemYear = Number(output[0].slice(output[0].length - 2));

    // gets last element of output and then the length of the element and gets the last two digits of it which contain the year
    let lastElemYear = Number(output[length].slice(output[length].length - 2));

    expect(firstElemYear).toEqual(lastElemYear - 1);
  });

  test("days and months decrease as they should", () => {
    const output = xToCurrDate(90);

    let firstElemMonth = output[0].split("/");
    firstElemMonth = parseInt(firstElemMonth[0]);

    let lastElemMonth = output[output.length - 1].split("/");
    lastElemMonth = parseInt(lastElemMonth[0]);

    expect(firstElemMonth).toBeLessThan(lastElemMonth);
  });
});
