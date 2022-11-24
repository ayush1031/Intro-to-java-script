const student ={
    roll:101,
    name: "RJ",
    gender:"F"
}

console.log(student);

console.log("~~~~~~~~~")

// DESTRUCTURING => extracting data of some objects into some variables
// => To perform some logical operations

// let a = student.roll;
// let b = student.name;
// let c = student.gender;
// console.log(a);
// console.log(b);
// console.log(c);

// DESTRUCTURING ASSIGNMENT OPERATION => SAME VARIABLE NAME OF ATTRIBUTES !!!
let {roll,name,gender}=student;
console.log(roll);
console.log(name);
console.log(gender);

console.log("~~~~~~~~")

let{roll : a, name: b } = student;
console.log(a);
console.log(b);

console.log("~~~~~~~")

// ARRAY DESTRUCTURING

let promocodes = ["ZOMATO 10","ZOMATO 25", "ZOMATO 50"]
let [code1,code2,code3] = promocodes;
console.log(code1)
console.log(code2)
console.log(code3)

// SWAP STATEMENT

let number1 = 101;
let number2 = 202;

//console.log(number1)
// console.log(number2)

[number1,number2] = [number2,number1]

console.log(number1)
console.log(number2)