let value = 3
let negValue = -value
console.log(negValue);

// Basic Arithmetic Operations

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**4);
console.log(2/4);
console.log(2%3);*/

// Addition of string

let str1 = "Hello"
let str2 = " Nanami"
let str3 = str1 + str2
console.log(str3); //Hello Nanami

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); //ref ECMAScript 7.1

//console.log((3+4) * 5 % 3); //using parenthesis for clean code

//Special Operations

console.log(+true); // console.log(true+); => Error
console.log(+"");

//Assignment Operators

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // Not the standard way

//Prefix and Postfix Operator

let gameCounter = 100
//gameCounter++; //101 =>Postfix
++gameCounter; //101 => Prefix
console.log(gameCounter);

