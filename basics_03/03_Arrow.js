const user = {
    username : "Rao Waqar",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
    
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "waqar"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "Waqar"
//     console.log(this.username);
// }
// chai()




const chai = () => {  // Arrow Function
    let username = "Rao"
    console.log(this);
}

// chai()



// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addtwo(8, 4));



// implicit return: we don't need to write return keyword

// const addtwo = (num1 , num2) => num1 + num2

// const addtwo = (num1 , num2) => (num1 + num2)

const addtwo = (num1 , num2) => ({username : "Kuch Bhi"})



console.log(addtwo(8, 4));