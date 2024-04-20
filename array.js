console.log("Arrays");
// decleration 
const myArr =[0,9,2,3,4]

// array is object
console.log(typeof myArr);
// i want to acces its first element

console.log(myArr[1]);

// shallow copy is a copy which shares a same reference 

const herOes =["Shaktiman" , "Shinchan"];
console.log(herOes);
// .length to know length of an array
console.log(myArr.length);

// push operation means addition of an element 

// it adds element at last index 



myArr.push(6);
console.log(myArr);

// pop means removal of last value 
myArr.pop();
console.log(myArr);

myArr.unshift(12);

// this operation shifts the position of an element 
// it pushes at the first index

// this operation is used to remove the element at the first index 
myArr.shift()
console.log(myArr);

// element does not exist then it returns -1  if exist then it return the indedx of an element
console.log(myArr.indexOf(50));
// this joins array and change the type of arrray object to string 
const newArr = myArr.join();

const myn1 = myArr.slice(1,3);

// difference between slice and splice 

// slice doest not chnages the original array 
// splice changes the original array

// example 

const tem = [1,2,3,4];
// slice operation
const n1=tem.slice(1,3);
// here we prints the initial array then i will print final slice operated array

console.log(tem);
console.log(n1);


// now spice operation 

const tem2 = [5,6,7,8];
// here we apply spice operation it will change the original array
const n2 = tem2.splice(1,3);
console.log(n2);
// then final array 

console.log(tem2);

