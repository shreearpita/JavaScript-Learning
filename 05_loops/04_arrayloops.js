/*Array:for of, Object:for in*/


// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // object : on which element the loop is to be applied. (not the general object in js)
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

// for-in
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);// 0 1 2 3 4
    //console.log(programming[key]);// array elements
}

// for-Each : callback function

const coding = ["js", "ruby", "go", "R", "python", "cpp", "swift"]

// coding.forEach( function greet(val){
//     console.log(val);
// });

// coding.forEach((item) => {
//     console.log(item);
    
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const values = coding.forEach((item)=>{
    //console.log(item);
    return item
})

console.log(values);
