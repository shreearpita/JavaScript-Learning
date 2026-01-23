// This(): refers current context

const user = {
    username : "Zenitsu",
    price: 9999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }

}
// user.welcomeMessage()
// user.username = "Inosuke"
// user.welcomeMessage()

//console.log(this); // {} : empty, because no global context

/*
The global object in browser is Window, hence 
console.log(this) // Window
when run on the browser console
*/


// function demon(){
//     let demonname = "Muzan"
//     console.log(this.demonname);// undefined, this can only be used with object context and not in function. 
    
// }

// const demon = function(){
//     let demonname = "Akaza"
//     console.log(this.demonname); //undefined
//  }

/* Arrow () */

const demon = () => {
    let demonname = "Akaza"
    console.log(this.demonname); //undefined
     console.log(this); // {}
    
}

//demon()

//() => {} // Basic Arrow function syntax

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return
const addTwo = (num1, num2) => num1 + num2


console.log(addTwo(2,3))
