function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("O");
}
// sayMyName()

// function addTwoNumbers(number1, number2) { //number1 and number2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 6)  //3 and 6 are arguments
// addTwoNumbers(3, "6")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null )

function addTwoNumbers(number1, number2) { 
    // let result = number1 +number2
    // return result
    // console.log("wwww");  //return k baad kuch bhi print ni hota

    return number1 + number2
}

const result = addTwoNumbers(4, 3)
// console.log("Result :", result);

function loginUserMessage(username = "sam"){ // agr user koi value ni enter krta to sam likha jay ga
    //lekin agr user value enter kr deta hai to sam override kr diya jai ga
    if (username === undefined) {
        console.log("Please enter the username");
        return //return k baad kuch bhi print ni hota
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Waqar"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// function calculateCartPrice(num1){
//     return num1
// }



// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,600));

// function calculateCartPrice(...num1){  //... rest/spread operator
//     return num1
// }

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,600,2000000000));



function calculateCartPrice(val1, val2, ...num1){  //... rest/spread operator
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,600,2000000000));


const user = {
    username : "Waqar",
    price : "123"
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)    object user ko call kiya
handelObject({  // object alag define kr liya
    username : "Rao",
    price : "499"
})


const newArray = [400,300,900,800]

function returnArrayValue(getValue){
    return getValue[3]
}

// console.log(returnArrayValue(newArray))
console.log(returnArrayValue([400,800,500,100]))


