const score =400;
console.log(score);
// here we are especially casting it to number

const balance = new Number(100);
console.log(typeof(score));

// here we get 2 precison value 
// mostly used in eccommerce site
console.log(balance.toFixed(2))

const num = 23.236
console.log(num.toPrecision())


const hundreds = 1000000
// representation 
// if follows us standard 
console.log(hundreds.toLocaleString());
// for indian number systen
console.log(j=hundreds.toLocaleString('en-IN'));
