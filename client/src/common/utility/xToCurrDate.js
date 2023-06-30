// Takes in a integer and outputs an array of dates starting at nums days back from current date to current date

function xToCurrDate(num) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;

  // see if more efficent way
  let year = date.getFullYear().toString().slice(2);

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${month}/${day}/${year}`;
  return currentDate; // "17-6-2022"
}

console.log(xToCurrDate(4));

// export { xToCurrDate };
