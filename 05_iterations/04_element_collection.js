const coding = ["js", "ts", "python", "c++"];

// const result = coding.forEach((item) => item);
// console.log(result); // this value is undefined beacuse foreach not return the value

const myNums = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// console.log(myNums);

const result = myNums.filter((num) => {
  return num > 4;
});
// console.log(result);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBook = books.filter((bk) => bk.genre === "History");
// console.log(userBook);
const newNumber = myNums
  .map((num) => num * 10)
  .map((item) => item + 1)
  .filter((num) => num > 50);
// console.log(newNumber);

const res = myNums.reduce((acc, currVal) => {
  //   console.log(acc, currVal);

  return acc + currVal;
}, 0);
// console.log(res);

const shoppingCart = [
  {
    name: "js",
    price: 999,
  },
  {
    name: "ts",
    price: 777,
  },
  {
    name: "react native",
    price: 555,
  },
  {
    name: "react js",
    price: 666,
  },
  {
    name: "angular",
    price: 888,
  },
];

const totalPrice = shoppingCart.reduce((accumalet, shoppingCartItem) => {
  return accumalet + shoppingCartItem.price;
}, 0);
console.log(totalPrice);
