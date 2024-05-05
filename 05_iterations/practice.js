const arr = [1, 2, 3, 4, 5, 6]

const factorial = arr.reduce((a, b) => a*b , 1)
// const factorial = arr.reduce(function(a, b) {
//     return a*b
// })
console.log(factorial);


let a = 6;
function facfor(number){
    let factorial = 1;
    for (let index = 1; index <= number; index++) {
        factorial = factorial * index        
    }
    return factorial
}
console.log(facfor(a));