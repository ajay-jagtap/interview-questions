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

// given array of numbers in unordered way-can have duplicated
// 1. find couple of pairs with addition of 10 (this can be duplicate pair as well)
// 2. list all those numbers which are not included in pairs
const input = [1,2,5,9,2,4,7,2,3,7,5,8]
