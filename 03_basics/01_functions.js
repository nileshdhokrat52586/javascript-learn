function sayMyName() {
  console.log("Nilesh");
}
// sayMyName();

//num1 & num2 parameter
function addTewNumber(num1, num2) {
  return num1 + num2;
}
const result = addTewNumber(1, 3); //1, 3 is argument
// console.log(result);

function loginUserMessage(userName = "reva") {
  if (!userName) {
    console.log("Please enter the user name");
    return;
  }
  return `${userName} just logged in`;
}

// console.log(loginUserMessage("Nilesh"));

//...num1 is the spread operation
function addItemsPrice(val1, val2, ...num1) {
  return num1;
}
console.log(addItemsPrice(5, 7, 8, 100));

const user = {
  userName: "nilesh",
  price: 500,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject?.userName} and price is ${anyObject?.price}`,
  );
}

handleObject(user);
