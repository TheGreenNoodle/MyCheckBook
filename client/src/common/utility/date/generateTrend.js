import { createFakeData } from "../createFakeData";

// takes in an array of objects. This array holds objects that contain dates and a cash amount. EX: [{date: cash}, {date: cash}, {date: cash}]. The dates are in order from earliest to latest. This function finds the sum of all of these dates cash values and sets the current indexes key value equal to all of the previous dates values before it. It also adds what the current dates value was before it was redeclared to this sum.

// sum = cashOne + cashTwo;
// EX[{date: cashOne}, {date: cashTwo}, {currentDate: sum + cashThree}]

// create as a class obj

function generateTrend(dates) {
  // remove
  const fakeMoney = new createFakeData();
  dates = fakeMoney.cashFlow(dates, 1, 100);

  let sum = 0;
  for (let date of dates) {
    const key = Object.keys(date)[0];
    // adds the current dates value to an overall sum
    sum += date[key];

    dates[date] = { x: key, y: sum };
  }

  return dates;
}

export { generateTrend };
