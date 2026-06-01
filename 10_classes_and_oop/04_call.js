function setUsername(username) {
  this.username = username;
}

function createUser(username, email, pwd) {
  setUsername.call(this, username);
  this.email = email;
  this.pwd = pwd;
}

const chai = new createUser("nilesh", "nilesh@gmail.com", "12345");
console.log(chai);
