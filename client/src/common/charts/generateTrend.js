class generateTrend {
  #combinedArrays;
  #endOfArrays;

  constructor(dataset) {
    // private
    this.#combinedArrays = [];
    this.#endOfArrays = {};

    // public
    this.dataset = dataset;
  }

  // private

  // combines all of the datasets datasets.data arrays into one array. This is done so that addCords() dose not need a double nested loop to iterate through all of dataset[0].data and then dataset[1].data. Now it can just run through it all in one go instead of needing to iterate to the next dataset.
  #combineArrays() {
    for (let [index, object] of this.dataset.entries()) {
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
      let datasetIndex = 0;

      if (this.#endOfArrays[datasetIndex] === index) {
        sum = 0;
        datasetIndex++;
      }

      sum += obj["cash"];
      obj["x"] = obj["date"];
      obj["y"] = Math.round(sum * 100) / 100;
    }
  }

  // puts arrays back into there original datasets.data
  #separateArrays() {
    for (let end = 0; end < this.#combinedArrays.length; end++) {
      let start,
        datasetIndex = 0;

      if (this.#endOfArrays[datasetIndex] === end) {
        this.dataset[datasetIndex].data = this.#combinedArrays.slice(
          start,
          end
        );

        start = end;
      }
    }
  }

  // public

  generateTrend() {
    this.#combineArrays();
    this.#addCords();
    this.#separateArrays();

    return this.dataset;
  }
}

export { generateTrend };
