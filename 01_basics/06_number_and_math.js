const score = 600;
const scoreNumber = new Number(400);

// console.log(scoreNumber, typeof scoreNumber);

// console.log(scoreNumber.toString().length);
// console.log(scoreNumber.toFixed(2));

const otherNumber = 123.3382;
// console.log(otherNumber.toPrecision(3)); // show first 3 digit

const hundreds = 10000000000;
// console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Math +++++++++++++

// console.log(Math.abs(-1000));
// console.log(Math.round(49.849));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 5, 3, 2));
// console.log(Math.max(9, 7, 2, 8));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1); //value above 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //value between 10-20
