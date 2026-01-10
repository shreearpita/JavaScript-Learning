// Dates

let myDate = new Date() // Date object and instance created
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof(myDate));

//let myCreatedDate = new Date(2025, 0, 22)
let myCreatedDate = new Date(2025, 0, 23, 5, 3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myNewDate = new Date("2025-10-01") //yy-mm-dd
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myNewDate.getTime());

console.log(Date.now()/1000);//gives time in miliseconds w/ decimal values

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

//String interpolation
`${newDate.getDay()} and the time`

//Internalization

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));
