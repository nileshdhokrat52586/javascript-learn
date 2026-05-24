//Global scope
if (true) {
  //block scope
  let a = 20;
  const b = 30;
  var c = 40;
}
// console.log(a);
// console.log(b);
console.log(c);

function one() {
  const username = "nilesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  two();
  //   console.log(website);
}
one();

function addone(num) {
  return num + 1;
}

// console.log(addone(4));

const addTwo = function (num) {
  return num + 2;
};

// console.log(addTwo(3));
