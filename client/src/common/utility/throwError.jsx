// accepts an array of params you want defined
// returns an error if undefined else returns nothing
function UndefinedParam({ params }) {
  console.log("key val " + params);
  //   for (const elem of params) {
  //     const elemToStr = Object.keys({ elem })[0];
  //     if (!elem)
  //       throw new Error(
  //         elemToStr +
  //           " can not be undefined. Please add " +
  //           elemToStr +
  //           " to component."
  //       );
  //   }
}

export { UndefinedParam };
