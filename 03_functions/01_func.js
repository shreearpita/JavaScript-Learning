// Function definition
function sayMyName(){
    console.log("G");
    console.log("O");
    console.log("J");
    console.log("O");
    
}

sayMyName() //Function execution
//sayMyName // Function reference : no error in runtime

function addition(num1, num2){ 

    console.log(num1 + num2);
    
}
addition() // NaN, because argument was not passed.
addition(4,"8") // 48

const result = addition (5,3)
console.log("Result: ", result); // undefined



