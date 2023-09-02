class generateTrend {
  #combinedArrays;
  #endOfArrays;
  #datasets;

  constructor(datasets) {
    // private
    this.#combinedArrays = [];
    this.#endOfArrays = {};
    this.#datasets = structuredClone(datasets);
  }

  // private

  // combines all of the datasets.data arrays into one array. This is done so that addCords() dose not need a double nested loop to iterate through all of datasets[i].data and so on. Now it can just run through it all in one go instead of needing to iterate to the next datasets index.

  // endOfArrays holds the end position of each array so that they can be later separated back out in separateArrays().
  // Example:
  //endOfArrays = {dataSetIndex: {current indexes .data array end position in combinedArrays} }
  #combineArrays() {
    for (let [index, object] of this.#datasets.entries()) {
      this.#combinedArrays = this.#combinedArrays.concat(object.data);
      this.#endOfArrays[index] = object.data.length;
    }
  }

  // add x and y so line chart can display the data
  // also sums up all of the previous cash values up to current index so that there is an upward trend in the data. This is done to show growth or decay on the line chart.

  // input = [{date: "07/02/23", cash: 20}, {date: "07/03/23", cash: 22}]
  // output:
  // [{date: "07/02/23", cash: 20, x: "07/02/23", y: 20},
  // {date: "07/03/23", cash: 22, x: "07/02/23", y: 44}]
  #addCords() {
    let sum = 0;
    for (let [index, obj] of this.#combinedArrays.entries()) {
      let datasetsIndex = 0;

      if (this.#endOfArrays[datasetsIndex] === index) {
        sum = 0;
        datasetsIndex++;
      }

      sum += obj["cash"];
      obj["x"] = obj["date"];
      obj["y"] = Math.round(sum * 100) / 100;

      delete obj["date"];
      delete obj["cash"];
    }
  }

  // puts arrays back into there original datasets.data

  // how it works
  // datasets is an array of objects
  // endOfArrays holds datasets indexes as keys
  // the value of those keys is the end position of that indexes .data array inside of combinedArrays
  // endOfArrays[currentDatasetsIndex] gets the end position of the .data array in combinedArrays and sees if it equals the endOfCurrentArray.
  // if it dose it .slices combinedArrays and sets the current .data array equal to that sliced value.
  #separateArrays() {
    for (
      let endOfCurrentArray = 0;
      endOfCurrentArray < this.#combinedArrays.length;
      endOfCurrentArray++
    ) {
      let startOfCurrentArray,
        currentDatasetsIndex = 0;

      if (this.#endOfArrays[currentDatasetsIndex] === endOfCurrentArray) {
        this.#datasets[currentDatasetsIndex].data = this.#combinedArrays.slice(
          startOfCurrentArray,
          endOfCurrentArray
        );

        startOfCurrentArray = endOfCurrentArray;
      }
    }
  }

  // public
  generateTrend() {
    this.#combineArrays();
    this.#addCords();
    this.#separateArrays();

    return this.#datasets;
  }
}

export { generateTrend };
