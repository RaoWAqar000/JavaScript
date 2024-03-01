// DataTypes

// 1) Primitive DataTypes
// String, Number, boolean, null, undefined, Symbol, BigInt


// We don't need to specify the datatypes(int, float etc) of following values
// That's why Js is dynamically typed language 

const Score = 100
const ScoreValue = 100.2
const isLoggedin = false
const outsideTemp = null

let userEmail; // It is considered as undefined value

const id = Symbol('12345')
const anotherId = Symbol('12345') 

console.log(id === anotherId); // Sumbol make values unique So ans is false

const BigNum = 987654321987654321n  //BigInt Value


// 2) Non-Primitive/Refrence DataType
// Arrays, Objects, Functions

const heroes = ["Tony Stark", "Captain America", "Arrow"] //Array

let myObj = { //Objects
    name : "Rao Waqar",
    age : 21,
}

const myFunctions = function () {
    console.log("Hello World");
    
}

// console.log(typeof BigNum);
// console.log(typeof outsideTemp);
// console.log(typeof myFunctions);
// console.log(typeof id);


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// In stack they take copy of the function not the original

let myName = "Rao"
let anotherName = myName
anotherName = "Waqar"

console.log(myName);
console.log(anotherName);


// in heap, it take the reference value of first value so thats why they become equal to each other

let userOne = {
    email : "www.raowaqar.com",
    hbl : "123456",
}

let userTwo = userOne;

userTwo.email = "www.raowaqar039.com"

console.log(userOne.email);
console.log(userTwo.email);

