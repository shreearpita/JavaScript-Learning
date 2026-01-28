// MAPS : unique values in order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);

for (const key of map) {
    //console.log(key);    
}
for (const [key, value] of map) {
    //console.log(key, ':', value);    
}

/*key : aray form output 
['IN', 'India']
['USA', 'United State of America']
['Fr', 'France]
[key, value] : Array destructuring: each element // IN : India*/

// for (const key in Map) {
//     console.log(key); // no output : not iterable.
// }

const myNumber = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumber.map( (num) => num + 10);

/* Chaining */
const newNums = myNumber
.map((num)=> num*10)
.map((num)=>)
console.log(newNums);
