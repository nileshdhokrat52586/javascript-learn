class User {
  constructor(username) {
    this.username = username;
  }

  logME() {
    console.log(`User name is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logME();
chai.addCourse();

const masalaChai = new User("MasalaChai");
// masalaChai.addCourse();
masalaChai.logME();
console.log(masalaChai instanceof User);
