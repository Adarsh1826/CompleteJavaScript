console.log(Math);
// absolute value
console.log(Math.abs(-4));

// sqrt
console.log(Math.sqrt(24).toPrecision(3));

// Math.Random to generate random value(it only generates number between 0 to 1)

// but we can also generate number in our desired range
// here we get minimum value of 1
console.log((Math.random()*10)+1);

const min = 10
const max =20


console.log((Math.random()*(max-min+1))+min)