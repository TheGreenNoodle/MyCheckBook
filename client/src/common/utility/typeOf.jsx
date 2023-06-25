// a file containing functions to test if a inputted value is or is not a specific data type. Returns are true or false.

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export { isObject };
