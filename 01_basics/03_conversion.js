let score = "33abc"
let state = null
let x = undefined
let type = true
let name = "Yuji Itadori"

/*taking value from frontend request
const {score} = req.body//type is not known*/

console.log(typeof score);
console.log(typeof(score)); //as a method

//let valueInNumber = Number(score)
//let valueInNumber = Number (state)
//let valueInNumber = Number (x)
let valueInNumber = Number (type)
//let valueInNumber = Number (name)

console.log(typeof valueInNumber);
console.log(valueInNumber) ;

/* "33" => 33
"33abc" => NaN : Not a number
true => 1; false => 0
null => 0
undefined => NaN
string => NaN*/

let isLoggedIn = "sakuna"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 1 => true; 0 => false; "" => false; string => true */

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);