export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];

  for (const element of array) {
    updatedArray.push(appendString + element);
  }

  return updatedArray;
}
