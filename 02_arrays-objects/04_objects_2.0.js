//const animeLovers = new Object() // singleton object
const animeLovers = {} // non-singleton object

animeLovers.id = "123abc"
animeLovers.name = ""
animeLovers.isLoggedIn = false

//console.log(animeLovers);

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nanami",
            lastname: "Kento"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//Optional Chaining (?) : if it exists else
// console.log(regularUser.fullname?.userfullname.firstname);

// Combining Objects

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)// {} : target 

const obj3 = {...obj1, ...obj2}
console.log(obj3); //object under object


//Values from Database

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

users[1].email

console.log(animeLovers);

console.log(Object.keys(animeLovers)); // all keys in arrays
console.log(Object.values(animeLovers));
console.log(Object.entries(animeLovers)); // every key-value pair in array

//Avoid crashing if value is not present

console.log(animeLovers.hasOwnProperty('isLogged'));


