// Merge/flatten an array of arrays
const arrays = [
  0,
  1,
  2,
  [
    [[3, 4]],
    [0, 1, 2, [[[3, 4]], [0, 1, 2, [[[3, 4]], [0, 1, 2, [[[3, 4]]]]]]]],
    [0, 1, 2, [[[3, 4]]]],
  ],
  0,
  1,
  2,
];

console.log(array.flat(Infinity));

const flattenUsingReduce = (arr) => {
  return arr.reduce((acc, item) => {
    return Array.isArray(item)
      ? [...acc, ...flattenUsingReduce(item)]
      : [...acc, item];
  }, []);
};
console.log(flattenUsingReduce(array));

const flattenUsingMap = (arr) => {
  return [].concat(
    ...arr.map((item) => {
      return Array.isArray(item) ? flattenUsingMap(item) : item;
    })
  );
};
console.log(flattenUsingMap(array));

