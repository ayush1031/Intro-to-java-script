//"use strict"

let shop="JOHN's Cafe";
console.log(shop);

const student = {
    name : "RG",
    age : 23
}


let sentence = ("Welcome student "+ student.name+". " + "Your age is "+student.age +".");
console.log(sentence);

// Another syntax =>

let sentence1 = (`Welcome student ${student.name}. Your age is ${student.age}.`);
console.log(sentence1)

let fullName = "RADHA GAUTAM"
console.log(fullName[0]);
console.log(fullName.length);
console.log(fullName[fullName.length-1]);

console.log(fullName.charAt(4));


// STRINGS ARE IMMUTABLE => YOU CANT CHNAGE IT 

fullName[1]='S';
console.log(fullName);

let name1 = "AYUSH";
let name2 = "AYUSH";
let name3 = new String("AYUSH")

console.log(name1);
console.log(name3);
console.log(typeof name1);
console.log(typeof name3);
console.log(name1==name3)
console.log(name1===name3)

// == only checks value but not data type 
// === works 1 step ahead it also checks value as well as data type => IMPORTANT  

// let cppCode = "#include<iostream.h>"+
//               "int main(){"+
//               "cout<<100;"+
//               "return 0;"+
//               "}";

let cppCode = "#include<iostream.h> \
              int main(){ \
                cout<<100; \
                return 0; \
              }";              

console.log(cppCode);   


let names =("AYUSH, SAURAV, HARJOT");
console.log(names); 

names.toUpperCase();
console.log("~~~~~~~~");
console.log(names);
// No change in names => Strings are immutable 

newNames = names.toLowerCase()
console.log(newNames)
