//Basic Comparison

console.log(2 > 1); // true
console.log(2 >= 1); 
console.log(2 < 1);// false
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

//JS automatically converts 2 into number.
// Comparing two different datatypes is not a good practice.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* equality check and comparison work differently.
comparison convert null to a number, treating it as 0.*/

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// Strict Check ===

console.log("2" === 2); //it doesn't convert 
