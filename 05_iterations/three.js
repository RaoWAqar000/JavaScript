// for of loop

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
    
// }


for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// MAps

const map = new Map()
map.set("PAK", "Pakistan")
map.set("BAN", "Bangladesh")
map.set("WI", "Windies")
map.set("PAK", "Pakistan")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, `:-`, value);
    
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

for (const [keys, value] of myObject) {
    console.log(keys, ':-', value);
}