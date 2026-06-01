class UserData {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new UserData("Nilesh", "nilesh@gmail.com", "1234");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User(username, email, pwd) {
  this.username = username;
  this.email = email;
  this.pwd = pwd;
}

User.prototype.encryptPassword = function () {
  return `${this.pwd}anb`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const coffee = new User("nilesh", "nilesh@gmail.com", "123");
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());
