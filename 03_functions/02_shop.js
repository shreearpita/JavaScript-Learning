// Shopping Cart : rest/spread operator: ...

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400,500));// [100, 200, 300, 400, 500]

function calculateCartPrice2(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice2(100,200,300,400,500));// [300, 400, 500]

// Passing Object
const user = {
    username: "Nobara",
    prices: 19999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Megumi",
    price: "399"
})

// Passing Arrays

const myNewArray = [200, 400, 800, 1600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1600, 800, 400, 200]));
