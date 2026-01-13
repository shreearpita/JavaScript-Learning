//Object Constructor
//Object.create // singleton

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Geto Suguru",
    [mySym]: "myKey1", // type is not symbol, it's string.
    age: 27,
    location: "Shibuya",
    email: "getosuguru@jjk.com",
    isLoggedIn: false ,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "getogojo@jjk.com"
//Object.freeze(JsUser) //changes can't be made.
JsUser.email = "getosugu@jjk.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // String Interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





