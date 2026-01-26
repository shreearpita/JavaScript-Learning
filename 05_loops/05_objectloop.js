// for-in

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for-of
const myObject2 = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':', value);
//     // Not iterable : 
// }
