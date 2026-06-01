const user = {
  username: "nilesh",
  loginCount: 10,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(this.username);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("nilesh", 23, true);
const userTwo = new User("lokesh", 32, true);
console.log(userOne);
console.log(userTwo);
