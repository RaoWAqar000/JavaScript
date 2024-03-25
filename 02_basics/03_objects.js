// singleton

// object literals

const mySym = Symbol("key1") //Symbol

const user = {
    name : "Waqar",
    "full name" : "Rao Waqar",
    [mySym] : "Mykey1", //ooper defined symbol ko is syntex sy access kiya jata hai
    age : 20,
    location : "Bahawalnagar",
    email : "raowaqar@gmail.com",
    isLoggedin  : false,
    lastLoggedin : ["Monday", "Saturday"]

}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);

// console.log(user[mySym]);
// console.log(typeof user[mySym]);

user.email = "Rao@gmail.com"
// console.log(user);
// Object.freeze(user);
user.email = "Rao@micro.com"
user.isLoggedin = true

user.greeting = function () {
    console.log("Hello G");
} 
user.greetingTwo = function () {
    console.log(`Hello G, ${this.name}`);
}

// console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingTwo());
