// Scope {}

// Global scope
//var c = 300

let a = 300
if (true) {
    // Block scope
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

// Hence, avoid var.

for (let i =0; i< Array.length; i++){
    const element = array[i];

}

// node and console global scope are different
