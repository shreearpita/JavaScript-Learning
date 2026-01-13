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

