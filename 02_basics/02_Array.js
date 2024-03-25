const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros );


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5], [0,9,8]]]
const real_Array = another_array.flat(Infinity)
console.log(real_Array);

console.log(Array.isArray("Rao"));
console.log(Array.from("Rao"));
console.log(Array.from({name:"Rao"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));