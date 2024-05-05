// if

// if (condition) {
    // condition ka true hona zrori hai agr condition true ni hogi to hm scope mai internal code run ni hoga
// }


// if(2<2){
//     console.log("execute");
//     // condition true ni hai to code run ni hoga 
    
// }


// if(2 == "2"){
//     console.log("Run ho ja");
// }

// if(4 === "4"){
//     console.log("Executed");
// }


// if else

// const isLoggedin = true
// const temprature = 41

// if(temprature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");

// }

// const score = 200

// if(score > 100){
//     const power ="fly"
//     console.log(`User Power : ${power}`);
// }



// const balance = 1000

// if(balance<500){
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }



const userLoggedin = true
const debitcard = true
const LoggedinfromGoogle = false
const LoggedinfromEmail = true

if(userLoggedin && debitcard && 2==3){
    console.log("Allow for Shopping ");
}

if(LoggedinfromGoogle || LoggedinfromEmail ){
    console.log("User logged in");
}
    