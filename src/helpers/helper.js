export function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export function matchedIndex(arr, value) {
  return arr.map((element, index) => ((element === value) ? index : undefined)).filter((x) => x !== undefined);
}