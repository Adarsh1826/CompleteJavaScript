// singleton

// constructor method
// Object.create

const mySym = Symbol("key1");
console.log(typeof mySym);

const JsUser={
    // here left side is key and right side is value 
    name :  "Heritage",
    age : 18 ,
    location : "Jaipur",
    isLogged :false,
    [mySym] :"mykey1"
    

}
// Accessing object 
console.log(JsUser.location)
console.log( typeof JsUser[mySym]);
// lock operation 
// Object.freeze(JsUser);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
// here we are getting reference of the function
console.log(JsUser.greeting)
JsUser.greetingTwo = function(){
    console.log('Hello Js user , ${this.name}');
}
console.log(JsUser.greetingTwo());

// key ponits

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySum]);