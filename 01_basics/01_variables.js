const accountId = 112233 //This value cannot be changed since it is a const

let accountEmail = "abc@gmail.com" //generally used because of scopes of variable

var accountPassword = "123456" //Prefer not to use var because of issue in block scope anf functional scope

let accountState; // undefined value

accountCity = "Jaipur" //undeclared variable : not declared using keywords like const, let, var

//accountId = 35 -> Not allowed, since it is a const.

accountEmail = "xyz@gmail.com"
accountPassword = "456789"
accountCity = "Delhi"

console.log(accountId) // prints a single variable

console.table([accountEmail,accountId,accountPassword,accountCity]) //prints multiple variable in a table format with index and Values.