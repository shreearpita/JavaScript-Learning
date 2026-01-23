// Closure, DOM : Document Object Model

// Nested Scope

// Each function call creates the new scope which are stored in the stack.

//Closure : child function can access the parents function.

function one(){
    const username = "Nobara Kugisaki"

    function two(){
        const grade = "Three"
        //console.log(username); // can access it
        
    }
    //console.log(grade); // cannot access

    //two()// Nobara Kugisaki
    
}

//one()

if (true){
    const username = "Megumi Fushiguro"
    if(username === "Megumi Fushiguro") {
        const grade = " Three"
        //console.log(username + grade);
        
    }
    //console.log(grade);
    
}

//console.log(username);

/* Interesting*/

console.log(addone(5)) // 6
function addone(num){
    return num + 1
}


// Expression - function
addTwo(5) // Error
const addTwo = function(num){
    return num + 2
}


