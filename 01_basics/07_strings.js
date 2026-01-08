const name = "Tanjiro"
const demonCount = 25

//console.log(name + demonCount + "Value"); //outdated syntax

console.log(`Hello my name is ${name} and I've killed ${demonCount} demons till now.`); //String interpolation : creates placeholder to inject the variables directly. This helps apply method to the strings directly.

//Declaration of string

const animeName = new String('Demon-Slayer') //using objects

//Accessing key-value pair
console.log(animeName[0]);

//Accessing the prototype
console.log(animeName.__proto__); //output : {} => empty object

console.log(animeName.length);
console.log(animeName.toLocaleUpperCase()); // Doesn't make changes to the original value but in the copy {stack-heap concept}
console.log(animeName.charAt(2)); // which character is at which position
console.log(animeName.indexOf('l'));

//Slicing
const newString = animeName.substring(0, 4)
console.log(newString);

const anotherString = animeName.slice(-10, 4)
console.log(anotherString);

//Trim n Replace

const newStringOne = "   zenitsu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jjk.com/gojo%20satoru" // url coding : " " => %20

console.log(url.replace('%20','-'));

console.log
(url.includes('jujutsu'));

//Split
console.log(animeName.split('-'));







