const moment = require("moment");

// Takes in a integer and outputs an array of dates starting at nums days back from current date to the current date

function xToCurrDate(num) {
  // get todays date in mm/dd/yy format
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;

  // see if more efficient way
  // 2023 format
  let fullYear = date.getFullYear();
  // 23 format
  let halfYear = fullYear.toString().slice(2);

  let currentDate = `${month}/${day}/${halfYear}`;

  // for loop till nums equals zero

  // check to see how many days are in a month
  // take that number of days and subtract by num
  // if the num of days is less than currDate push currMonth/currDay -nums/currYear to an array
  // if it is more than subtract currMonth by one and repeat currDay - nums
  // push new date to array
  // if that number equals zero decrease month amount by 1
  // repeat process for the next month

  return moment(`${fullYear}-${month}`, "YYYY-MM").daysInMonth(); // "17-6-2022"
}

console.log(xToCurrDate(4));

// export { xToCurrDate };
