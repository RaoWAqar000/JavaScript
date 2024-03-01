const score = 400;
// console.log(score);

const balance  = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance);

// console.log(balance.toFixed(2));

const otherNum = 223.5464
// console.log(otherNum.toFixed(3));

// console.log(otherNum.toPrecision(4));

const hunderd = 1000000
// console.log(hunderd.toLocaleString('ur-PK'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER); //Max value it can store
// console.log(Number.MIN_SAFE_INTEGER);


// ############################ MATHS(We should practice it in Console) ############################


// console.log(Math);
// console.log(Math.abs(-4));  //convert all -ve values in +ve and not vice cersa
// console.log(Math.round(4.578));
// console.log(Math.ceil(5.3));  //top roundoff/ Take high Value
// console.log(Math.floor(5.9)); //take lower value
// console.log(Math.sqrt(9));
// console.log(Math.pow(3, 3));
// console.log(Math.min(3, 5, 1, 9, 0.2));
// console.log(Math.max(44, 76, 98, 32, 100));

console.log(Math.random()); // random value is always between 1 and 0

console.log((Math.random()*10) + 1); // To avoid 0 value case , we add 1

console.log(Math.floor((Math.random()*10) + 1)); //to avoid max value and to get min value but not 0


const min = 10
const max = 20

// Math.random() * (max - min + 1)  this formula gives the value under 10 but 
// our min value is 10 so we add min value in this formula. Now the formula becomes
// (Math.random() * (max - min + 1)) + min

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(Math.);
                        

                                    

