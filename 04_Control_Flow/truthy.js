// const userEmail = "rao2ewq@gmail.com"

// if(userEmail){
//     console.log("Got user Email");
// } else{
//     console.log("don't have Email");
// }



// const userEmail = ""

// if(userEmail){
//     console.log("Got user Email");
// } else{
//     console.log("don't have Email");
// }



// falsy values(kon kon si values ko false assume kiys jata hai)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value
// "0", [], {}, 'false', function(){}, " ",


// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// } else{
//     console.log("Array is not Empty");
// }


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {    //Object.keys(emptyObj) return an array so we can apply length property 
//     console.log("Object is Empty");
// }


//  Nullish Coalescing Operator(??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 456
val1 = undefined ?? 654 ?? 987


console.log(val1);

// Terniary Operator(?)
// condition ? true : false

const price = 500
price <= 300 ? console.log("less than 300") : console.log("more than 300");