// for of

// ["", "", ""]
// [{}, {}, {}]

// Arrays
const arr = [1,2,3,4,5]
for (const num of arr) {
    // object : on which element the loop is to be applied. (not the general object in js)
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

//Objects

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':', value);
//     // Not iterable : 
// }