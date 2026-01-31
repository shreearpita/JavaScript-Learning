// Reduce
// accumulator : final sum is put in the accumulator for that works as the next input

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`accumulator: ${acc} and Current Value: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr)=> acc+curr, 0)
console.log(myTotal);

// shopping cart billing

const shoppingCart = [
    {
        itemName: "WebDev Course",
        price: 5999
    },
    {
        itemName: "Data Analytics Course",
        price: 10999
    },
    {
        itemName: "DataScience",
        price: 20999
    },
    {
        itemName: "DSA Course",
        price: 5999
    },
    {
        itemName: "System Design Course",
        price: 15999
    }
]

const priceToPay=shoppingCart.reduce((acc, item)=>acc + item.price,0)

console.log(priceToPay);

