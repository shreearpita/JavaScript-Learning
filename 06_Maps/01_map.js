// MAPS : unique values in order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);

for (const key of map) {
    console.log(key);    
}
for (const [key, value] of map) {
    console.log(key, ':', value);    
}

/*key : aray form output 
['IN', 'India']
['USA', 'United State of America']
['Fr', 'France]
[key, value] : Array destructuring: each element // IN : India*/