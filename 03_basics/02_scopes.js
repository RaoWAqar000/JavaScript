// var c = 400

let a = 200

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner a : ", a);
    // var c = 30
}

// console.log("Outer a : ", a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rao Waqar"

    function two(){
        const website = "Youtube"

        // console.log(username);
    }
    // console.log(website); //cannot access because is ka scope oper {} mai tha

    two()
}

one()

if(true){
    const username = "Rao Waqar"
    
    if(username === "Rao Waqar"){
        const website = " Google"
        // console.log(username + website);
    }
    // console.log(website); can't execute
}
// console.log(username);  can't execute


// +++++++++++++++++++++++++++ INtersting ++++++++++++++++++++++++++++

console.log(addone(7));  //we can write this before initializing in the type of funtion
function addone(num){
    return num+1
}
 
console.log(addtwo(5)); // can not write in this type of function

const addtwo = function(num){
    return num + 4
}

console.log(addtwo(5));


