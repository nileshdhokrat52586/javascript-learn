//singleton when we create using constuctor that will singleton
// Object.create();

//object literals

mySym = Symbol("key1");
const jsUser = {
  name: "Nilesh",
  age: 32,
  [mySym]: "myKey1",
  location: "pune",
  "email Id": "nilesh@test.com",
};
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["email Id"]);
// console.log(typeof jsUser[mySym]);
jsUser.name = "Nilesh Dhokrat";
jsUser["email Id"] = "nileshdhokrat@google.com";

// console.log(jsUser);
jsUser.greeting = function () {
  console.log("this is the object function");
};

jsUser.greetingTwo = function () {
  console.log(`Hello user ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

Object.freeze(jsUser);

// const tinderUser= new Object() // singleton

const tinderUser = {};

tinderUser.id = "12";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const userDetails = {
  email: "nilesh@test.com",
  fullname: {
    fullUserName: {
      firstName: "Nilesh",
      lastName: "Dhokrat",
    },
  },
};
console.log(userDetails.fullname.fullUserName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);

const users = [
  {
    id: 1,
    name: "Nilesh",
    age: 32,
  },
  {
    id: 2,
    name: "Akshay",
    age: 30,
  },
  {
    id: 3,
    name: "Saurabh",
    age: 28,
  },
];
users[1].name;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//de-structure object

const course = {
  courseName: "js in hindi",
  price: "8888",
  courseInstructor: "nilesh",
};

// course.courseInstructor
const { courseInstructor: instructor } = course;
console.log(instructor);
