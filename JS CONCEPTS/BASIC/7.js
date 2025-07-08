const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 5665
    },
    {
        itemName : "py course",
        price : 544
    },
    {
        itemName : "cpp course",
        price: 252
    },
    {
        itemName : "App dev course",
        price: 535235
    }
]

const priceTOpay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTOpay);
