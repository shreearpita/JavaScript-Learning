const accountId = 112233 //This value cannot be changed since it is a const

let accountEmail = "abc@gmail.com"

var accountPassword = "123456"

accountCity = "Jaipur"

//accountId = 35 -> Not allowed, since it is a const.

accountEmail = "xyz@gmail.com"
accountPassword = "456789"
accountCity = "Delhi"

console.log(accountId) // prints a single variable

console.table([accountEmail,accountId,accountPassword,accountCity]) //prints multiple variable in a table format with index and Values.