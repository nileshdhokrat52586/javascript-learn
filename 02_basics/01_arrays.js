const myArray = [0, 1, 2, 3, 4, 5, 6];

const mrFriends = ["Rohit", "Roshan", "Saurabh", "Akshay"];

const myArr2 = new Array(3, 4, 5, 6, 7);
myArray.push(7);
myArray.push(8);
// myArray.pop();
// myArray.unshift(9); // this value will be added to the 0 index
// myArray.shift();

// console.log(myArray);
// console.log(myArray.includes(7));
// console.log(myArray.indexOf(3));

// const joinArray = myArray.join();
// console.log(typeof joinArray);

//slice, splice

// console.log("A", myArray);

// const arr1 = myArray.slice(1, 3); // just taking the value of 1-2 index value
// console.log(arr1);
// console.log("B", myArray);
// const arr2 = myArray.splice(1, 3); // manipulate array remove the that value
// console.log(arr2);
// console.log("C", myArray);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// all_heros = marvel_heros.concat(dc_heros);
// console.log(combined_heros);
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const unsortedArray = [1, 2, 3, [4, 5], 6, 7, [8, 4, [5, 9], 3]];
console.log(unsortedArray.flat(2)); // you have to pass the value as number of inner array

console.log(Array.isArray("Nilesh"));
console.log(Array.from("Nilesh"));
console.log(Array.from({ name: "Nilesh" }));

let score1 = 300;
let score2 = 200;
let score3 = 500;
console.log(Array.of(score1, score2, score3));
