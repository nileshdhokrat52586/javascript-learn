//this=> refer to the cureent context(value)
const userName = "localtest";
const user = {
  userName: "nilesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to website`);
    console.log(this);
  },
};
// console.log(this);

// user.welcomeMessage();

// function chai() {
//   const username = "nilesh";
//   console.log(this.username);
// }
// chai();

// const chai = function () {
//   let username = "nilesh";
//   console.log(this.username);
// };

const chai = () => {
  let username = "nilesh";
  console.log(this.username);
};
chai();
