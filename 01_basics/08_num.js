const score = 400 // by default datatype : number
console.log(score);


//Explicitly defining the satatype as number
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); //decimal upto 2 : 100.00

const otherNUmber = 123.8954

console.log(otherNUmber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//1,000,000 : by default US std. 
/* You can specify acc to the country*/



