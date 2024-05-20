var abc = {
  ad: "4",
  df: "thh",
};
const hh = abc;
delete hh.df;
console.log(hh);
console.log(abc);

let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
console.log(x);
// [object,object]:{
// name:"Akki"
// }

let abc = { sachin: name };
let xyz = { sachin: name };
if (Object.is(abc.sachin, xyz.sachin)) {
  console.log("dd1");
} else {
  console.log("dd");
}
console.log(abc == xyz);

const user = {
  name: "Raj",
  location: {
    city: "NY",
    state: "NY",
  },
};
//const copy = Object.assign({}, user);
// OR
const copy = { ...user };
copy.location.city = "Albany";
console.log("original: ", user.location);
console.log("copy:", copy.location);

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

let items = ["tea", "coffee", "milk"];
let copy = items;
console.log(items); // ["tea", "coffee", "milk"]
console.log(copy); // ["tea", "coffee", "milk"]
// remove elements of items array starting from position 0 till length of array items.splice(0, items.length);
console.log(items); // []
console.log(copy); // []

var foo = function bar(e) {
  return 12 * e;
};
console.log(foo(3), 111);

var salary = "1000$";
(function () {
  console.log("Original salary was " + salary);
  var salary = "5000$";
  console.log("My New Salary " + salary);
})();

console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]

carName = "Volvo";
console.log(carName); //Volvo
var carName;

console.log(carName); //undefined
var carName;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// Merge both arrays without duplicates
console.log([...new Set([...arr1, ...arr2])]);

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

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i), 1;
  });
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i), 1;
  });
}

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    console.log(this);
    return this.newColor;
  }
  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}
const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
console.log(freddie.newColor);

/* Please write a program to reverse each word but maintiane the order.
Input : Welcome to the fitment round!!
Output: emocleW ot eht tnemtif !!dnuor
*/
const input = "Welcome to the fitment round!!";
console.log(input);
const output = input.split(' ').map(word => {
return word.split('').reduceRight((acc, item) => {return acc+item}, '');
//return word.split('').reverse().join('');
}).join(' ');
console.log(output);

