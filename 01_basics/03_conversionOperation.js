let score = "26kill";
//let score = null;
//let score = undefined
//let score =  true

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33"=> 33
"33Kill"=> NaN
true=> 1; false=> 0;
null=> 0;
undefined=> NaN
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false;
"" => false;
"Nilesh"=> true
*/

let value = 33;
let valueOfString = String(value);
// console.log(valueOfString);
// console.log(typeof valueOfString);

/***************** Operations ******************/

let str1 = "Hello";
let str2 = " Nilesh";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + (2 + 2));
console.log(1 + 2 + "3");

console.log(((3 + 4) * 5) % 3);
