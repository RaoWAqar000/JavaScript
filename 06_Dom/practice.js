let arr = [1, 2, 3, 4, 5, 6]

function factorial(number) {
    let c = arr.reduce((a, b) =>{
        return a*b
    }, 1)
}
factorial(arr)