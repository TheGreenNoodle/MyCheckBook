// takes in an array of objects. This array holds objects that contain dates and a cash amount. EX: [{date: cash}, {date: cash}, {date: cash}]. The dates are in order from earliest to latest. This function finds the sum of all of these dates cash values and sets the current indexes key value equal to all of the previous dates values before it. It also adds what the current dates value was before it was redeclared to this sum.

// sum = cashOne + cashTwo;
// EX[{date: cashOne}, {date: cashTwo}, {currentDate: sum + cashThree}]

// create as a class obj

// want to have data be x and cash be y. Y is the current value at the date plus all prev values.

function generateTrend(dataset) {
  // concat all objects arrays into one long array
  // save end points of each array in a object so that later on they can be sliced back to there original sizes and returned to there respective datasets
  let combineArrays = [];
  let endOfArrays = {};

  // console.log(dataset);
  // console.log("---------------------------");
  for (let [index, object] of dataset.entries()) {
    combineArrays = combineArrays.concat(object.data);
    endOfArrays[index] = object.data.length;
  }

  // add x and y to them
  let sum = 0;
  for (let [index, object] of combineArrays.entries()) {
    let datasetIndex = 0;
    // adds the current dates value to an overall sum
    sum += object["cash"];

    combineArrays[index] = {
      x: object["date"],
      y: Math.round(sum * 100) / 100,
    };

    if (endOfArrays[datasetIndex] === index) {
      sum = 0;
      datasetIndex++;
    }
  }

  // separate them out again back into there respective objects.
  // for (let endOfArray = 0; endOfArray < combineArrays.length; endOfArray++) {
  //   let startOfArray,
  //     datasetIndex = 0;

  //   if (endOfArrays[datasetIndex] === endOfArray) {
  //     dataset[datasetIndex].data = combineArrays.slice(
  //       startOfArray,
  //       endOfArray
  //     );

  //     startOfArray = endOfArray;
  //   }
  // }
  console.log("first");
  dataset[0].data = combineArrays;

  return dataset;
}

export { generateTrend };
