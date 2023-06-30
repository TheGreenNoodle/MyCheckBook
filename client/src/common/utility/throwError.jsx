import { isObject } from "./typeOf";

// accepts a object with the key being the name of the prop and the keys value being the data of that prop.
// if a keys value is undefined it will throw an error saying which key or prop needs to be defined so a certain component works as expected.

function UndefinedParam(obj, functionName) {
  // requires an obj
  if (!isObject(obj))
    throw new Error("UndefinedParam requires an object as the input");

  for (const key in obj) {
    if (!obj[key]) throw new Error(key + " can not be undefined");
  }
}

export { UndefinedParam };
