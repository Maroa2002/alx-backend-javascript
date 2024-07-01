export default function hasValuesFromArray(set, array) {
  // return array.every( value => set.has(value));

  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }

  return true;
}
