// Stack (Primitive) , Heap (Non-Primitive)

let myFavAnime = "Jujutsu Kaisen"

let anothername = myFavAnime
anothername = "Demon Slayer"

console.log(myFavAnime)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "gojo@jjk.com"

console.log(userOne.email)
console.log(userTwo.email)
