let myName = "Nilesh   ";

console.log(myName.length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.nilesh = function () {
  console.log("Nilesh id present in all objets");
};

// heroPower.nilesh();
// myHeros.nilesh();

//inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teachar = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvaliable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __prototype__: TeacherSupport,
};

Teachar.__prototype__ = User;

//modern syntax
Object.setPrototypeOf(TeacherSupport, Teachar);

let anotherUsername = "ChaiAurCode   ";

String.prototype.trueLenth = function () {
  console.log(this);
  console.log(`${this.name}`);

  console.log(`True lenth is: ${this.trim().length}`);
};

anotherUsername.trueLenth();
"nilesh".trueLenth();
