// Array Questions
const data = [
    { name: "Arun", marks: 456 },
    { name: "Manu", marks: 52 },
    { name: "Tanu", marks: 54 },
    { name: "Raja", marks: 75 },
    { name: "Rani", marks: 78 },
    { name: "Madhu", marks: 60 },
    { name: "Hari", marks: 90 },
];
// Return - true if all students have marks >= 50, else false
console.log(data.every((obj) => obj.marks >= 50));


console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]


let obj = { name: "David" };
let newObj = obj;
console.log(obj); // { name: 'David' }
console.log(newObj); // { name: 'David' }
obj = null;
console.log(obj); // null
console.log(newObj); // { name: 'David' }

let items = ["tea", "coffee", "milk"];
let copy = items;
console.log(items); // ["tea", "coffee", "milk"]
console.log(copy); // ["tea", "coffee", "milk"]
items.length = 0;
console.log(items); // []
console.log(copy); // []


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// Merge two arrays : [1, 2, 3, 4, 5, 1,2,4, 5, 6, 7, 8, 9, 10]
// Merge both arrays without duplicates: [1,2,3,4,5,6,7,8,9,10]
console.log([...new Set([...arr1, ...arr2])]);


// No fo occurrences
let arr = [2, 5, 8, 6, 9, 7, 5, 2, 6, 3, 4, 1, 5, 9];
// Output: {2: 5, 3:4} 


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


// given array of unordered and duplicated numbers
// 1. find couple of pairs with addition of 10 (this can be duplicate pair as well)
// 2. list all those numbers which are not included in pairs
const numbers = [1, 2, 5, 9, 2, 4, 7, 2, 3, 7, 5, 8]


// Write function findObj to find value based on key path provided
var tree = {
    a: {
        b: {
            c: 'Globant',
        },
        d: 1234,
        e: false,
        f: {
            j: null,
        },
    },
};
// Testing the function with given examples
console.log(findObj(tree, 'a.b.c')); // Output: Globant
console.log(findObj(tree, 'a.b')); // Output: { c: 'Globant' }
console.log(findObj(tree, 'a.b.c.d')); // Output: undefined

const findObj = (obj, key) => {
    const path = key.split('.'); //[a,b,c]
    const result = path.reduce((acc, item) => {
        return acc[item]
    }, obj)
    return result;
}


/* Please write a program to reverse each word but maintain the order.
Input : Welcome to the fitment round!!
Output: emocleW ot eht tnemtif !!dnuor
*/
const input = "Welcome to the fitment round!!";
console.log(input);
const output = input.split(' ').map(word => {
    return word.split('').reduceRight((acc, item) => acc + item, '');
    //return word.split('').reverse().join('');
}).join(' ');
console.log(output);


// find no which is having maximum occurrences
//[1, 2, 3, 1, 2, 1]; => 1


