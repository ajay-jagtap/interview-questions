// Basics
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"2" + "2");
console.log("A" - "B" + "2");
console.log(1 + 1 + "a" + 1 + 1);
console.log(1 + "1" - 1 + "1" + 1);


// Hoisting
var a = 10;
function foo() {
    console.log(a);
    var a = 20;
}
foo();


carName = "Volvo";
console.log(carName); //Volvo
var carName;

console.log(carName); //undefined
var carName;


function sayHi() {
    console.log(name);
    console.log(age);
    var name = "Lydia";
    let age = 21;
}
sayHi();


getData1();
getData();
function getData1() { console.log("getData1") }
var getData = () => { console.log("Hello") }


var salary = "1000$";
(function () {
    console.log("Original salary was " + salary);
    var salary = "5000$";
    console.log("My New Salary " + salary);
})();


// Closure
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


// Shallow and deep copy
const person = [2, 4, { name: "Shankar", price: { max: 100, min: 200 } }];
const otherPerson = [...person];
otherPerson[1] = 100;
otherPerson[2].name = "hoodie";
otherPerson[2].price.min = 0;
console.log(person[1]);
console.log(person[2].name);
console.log(person[2].price.min);


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


// context-this
function func() {
    console.log(this.a)
}
func();
const func = () => {
    console.log(this.a)
}
func();


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


// call, bind, apply
function func() {
    return this.a + this.b;
}
console.log(func());
func().call({ a, b });


// event-loop
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };
    setTimeout(log, 0);
}


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


console.log("Start");
setTimeout(() => { console.log("Timeout"); });
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Pass be value and reference
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

// Other Questions
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