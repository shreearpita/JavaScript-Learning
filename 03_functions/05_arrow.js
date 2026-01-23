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

// Arrow ()
