// dates

let myDate = new Date()
// here we get full date 
console.log(myDate.toString());
// toDateString
// this is giving only Date Month and Year
console.log(myDate.toDateString());

// type of date , this is object
console.log(typeof myDate);

// Month is starting from zero in javascript
let myCreateDate = new Date(2023,0,23);
console.log(myCreateDate.toDateString());
// here representation changes
console.log(myCreateDate.toLocaleString());

// we prefer MM/DD/YY (Indian Standard)

let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
    
});

