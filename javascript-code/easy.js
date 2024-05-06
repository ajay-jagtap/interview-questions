console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"2" + "2");
console.log("A" - "B" + "2");
console.log(1 + 1 + "a" + 1 + 1);
console.log(1+"1"-1+"1"+1);

//Hoisting
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
foo();

//Closure
function closure() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const closure1 = closure();
closure1();
closure1();

//Shallow and deep copy
const person = [2, 4, { name: "Shankar", price: { max: 100, min: 200 } }];
const otherPerson = [...person];
otherPerson[1] = 100;
otherPerson[2].name = "hoodie";
otherPerson[2].price.min = 0;
console.log(person[1]);
console.log(person[2].name);
console.log(person[2].price.min);

//context-this
function func() {
console.log(this.a)
}
func();
const func = () => {
console.log(this.a)
}
func();


function func() {
  return this.a + this.b;
}
console.log(func());
func().call({ a, b });

setTimeout(() => {
  console.log("Hi");
}, 0);
while (true) {
  //do nothing
}

// event-loop
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 0);
}

let arr = [2, 5, 8, 6, 9, 7, 5, 2, 6, 3, 4, 1, 5, 9];
// Output: {2: 5, 3:4} // No fo occurences

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// Merge two arrays : [1, 2, 3, 4, 5, 1,2,4, 5, 6, 7, 8, 9, 10]
// Merge both arrays without duplicates: [1,2,3,4,5,6,7,8,9,10]

var a = {
  name: "Globant",
};
var b = 2;
var c = [];

function change(tempA, tempB, tempC) {
  tempA.name = "Pune";
  tempB = 3;
  tempC.push("c");
}
change(a, b, c);
console.log(a.name, b, c);

const temp = [10, 20, 30, 40, 50];
// value>20 => [30,40,50]
