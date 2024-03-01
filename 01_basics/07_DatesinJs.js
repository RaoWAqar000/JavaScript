// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2002, 5, 20)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2002, 5, 20, 5, 23)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-02-23")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("02-14-2022")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(myCreatedDate.getTime()/1000));

// console.log(myCreatedDate.getFullYear());

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday:'long'
})
