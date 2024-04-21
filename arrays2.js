const marvel_heroes =["IronMan","Thor","SpiderMan"]
const dc = ["Superman","Flash","batman"];

//dc.push(marvel_heroes);
// array inside array 
//console.log(dc);

// here marvel_heroes is taken as one element of dc


// concat is better choice for merging two arrays 
/*
const allHeroes =marvel_heroes.concat(dc)
console.log(allHeroes);

*/
// spread operation for merging the two array 
const allNew  = [...marvel_heroes,...dc];

console.log(allNew);

const another_array = [1,2,3,4,[1,2,3],7,[4,5,6]]
// when we enters infinity it solve all depths
const usable = another_array.flat(Infinity)
console.log( usable);

console.log(Array.isArray("Jai"));
// here we converts string into array 

console.log(Array.from("Jai"));

// important point 

console.log(Array.from({name : "Heriatge"}));  // here we get empty array[] 

let score  = 100 ;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3))