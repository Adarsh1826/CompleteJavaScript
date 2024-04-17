// two types of datatypes 
// primitive and non primitive

console.log("Primitive DataType");
// string, number, boolean, null,undefined, symbol(to make value unique) , BigInteger(Scientific Value)

console.log("Reference type and Non-Primitive");
// Array , Objects , Functions

// javascript brother typescript 
// float and double not specified in..
let userEmail;
console.log(userEmail);

console.log("Symbol");
const id =Symbol('123');
const id2 =Symbol('123');
console.log(id===id2);

// arrays
const heroes = ["Aadars","Jaava"];
console.log(heroes);

// function
const myfunction=function(){
    console.log("Heloo World");
};
console.log(myfunction());
const b ="100.0";
// to check the type of anything in javascript
console.log(typeof id);