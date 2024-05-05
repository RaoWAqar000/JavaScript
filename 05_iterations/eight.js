const myNums = [1, 2, 3]

// const Sum = myNums.reduce(function (acc, currValue) {
//     console.log(`acc : ${acc} and currValue : ${currValue}`);
//     return acc + currValue
// } ,0) //initial value is 0

const Sum = myNums.reduce( (acc, currValue) => acc+currValue, 3) //initail value is 3

// console.log(Sum);

const ShoppingCart = [
    {
        itemName : "Js Course",
        price : 1999
    },
    {
        itemName : "py Course",
        price : 2499
    },
    {
        itemName : "Web Dev Course",
        price : 4999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
]

const TotalPrice = ShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(TotalPrice);