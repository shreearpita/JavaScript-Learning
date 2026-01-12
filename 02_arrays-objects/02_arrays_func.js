// Arrays Function

const toman_founders = ["Mickey", "Draken", "Mitsuya", "Baji", "Pah-Chin", "Kazutora"]

const toman_loyals = ["Tackemitchy", "Chifuyyu", "Smiley","Angry","Hakkai"]

//toman_founders.push(toman_loyals) // Arrays within arrays

// console.log(toman_founders);
// console.log(toman_founders[6][1]
// );

// const allMembers = toman_founders.concat(toman_loyals)
// console.log(toman_founders);

// Spread Operators

const all_new_members = [...toman_founders, ...toman_loyals]

console.log(all_new_members);

const toman_squads = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_squads = toman_squads.flat(Infinity)
console.log(real_squads);


// Used in Data Scrapping 
console.log(Array.isArray("Sano Manjiro")); 
console.log(Array.from("Sano Manjiro")); // Converts to Array

console.log(Array.from({name : "Draken"})); // interesting : empty array

let toman_member = 100
let bd_member = 200
let vallhala_member = 300

console.log(Array.of(toman_member, bd_member, vallhala_member));

