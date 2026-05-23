/*
primative data types
7 types => String, Number, bigInt, Boolean, Null, Undefined, Symbol;
*/

const stringValue = "String";
const number = 100;
const numberValue = 100.3;

const booleanValue = false;
const nullValue = null;
let undefinedValue;
const symbolValue = Symbol("123");
const bigIntValue = 12345335322443353n;

console.table([
  stringValue,
  number,
  numberValue,
  booleanValue,
  nullValue,
  undefinedValue,
  symbolValue,
  bigIntValue,
]);

/*
Reference (Non-primative)
Array, object, function
*/
const arrayValue = [1, 2, 3, 4, 5];
const objectValue = {
  id: 1,
  value: "Object",
};
const myFunction = function () {
  return "Hello JS";
};
console.log(typeof myFunction);
