// singleton object
//const Tinder  = new Object();


// non -singleton
const tinderUser = {}
tinderUser.id = "12@abc"
tinderUser.name="JavaScript"
tinderUser.isLoggedIn =false;
//console.log(tinderUser);

const regularUser  ={
    email : "hitk@edu.in",
    // object in object 
    fullName :{
       userFullName: {
        firstName : "hitk",
        lastName : "worst"
       }
    }

}

//console.log(regularUser.fullName.userFullName.lastName);

// if not exist use ? 

// merging objects 

const obj1 = {1: "a",2:"b"}
const obj2 = {3:"c",4:"d"}

// merged object 
const merObj = {...obj1,...obj2}

// console.log(merObj);

// when we get values from database 

// then we will get array of object

const users =[
    {
        id:1,
        email:"ads@gmail.com"

    },
    {
        id:1,
        email:"ads@gamil.com"
    }
]

