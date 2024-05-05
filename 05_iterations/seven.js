const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
let Nums = myNums.map( (num) => num + 10)
// console.log(Nums);

let newNums  = myNums.forEach( (num) => {
    console.log(num + 10);
    return num
})
// console.log(Nums);

let NewN = myNums
            .map( (num) => num*10)
            .map( (num) => num + 1)
            .filter( (num) => num >= 40)
console.log(NewN);
