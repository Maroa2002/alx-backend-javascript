export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const newString = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newString.push(value.slice(startString.length));
    }
  }

  return newString.join('-');
}
