//Write a such that below condition will be true
if (a == 1 && a == 2 && a == 3) {
  console.log("Hello");
}
let a = {
  flag: 1,
  toString: function () {
    console.log("converting");
    return this.flag++;
  },
};

console.log("" == []); // true
//   [].toString() => “”
//   [1,2,3].toString() => “1,2,3”

function test(a, a) {
  console.log(a);
}
test(3);
// undefined
//second a is overriding value of first a..same variable name

// Hoisting Concept:
var magic = 1000;
function magic() {
  console.log("In Function");
}
console.log(magic); //1000

console.log(false == []); //true
console.log(false == ![]); //true

function Person() {
  this.name = "Hii";
  return { name: "Hello" };
}
const person = new Person();
console.log(person);
// Person {name: ‘Hello’}

let str = "Hello";
console.log(str[0]); //H
console.log(str[1]); //e
str[0] = 1;
str[1] = 2;
console.log(str[0]); //H
console.log(str[1]); //e
// Primitives datatypes (here string) are immutable (cant change)


// Circular referencing Concept
let obj = {
  name: 'hello'
}
obj.obj = obj;
console.log(obj)
//  { name: 'hello', obj: [Circular *1] }
