// Immediately Invoked Function Expression (IIFE) : (function)();
/* IIFE doesn't know where the context stops*/
 /*Database file, protect from global scope pollution, immediate execution, own scope */

 (function coffee(){
    // named iife
    console.log('DB CONNECTED');
 } ) ();

 ( (name)=>{
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
 })('Mei Mei');

 