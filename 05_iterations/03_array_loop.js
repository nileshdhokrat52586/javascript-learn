//forof=> is returning the value not a key
//forin=> is returning key not value

const arr = [1, 2, 3, 4, 5];

for (let item of arr) {
  //   console.log(item);
}

const greetings = "Hello world";

for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

const mapArray = new Map(); // map is taking a key value pairs and it's object, didn't set same key again

mapArray.set("IN", "India");
mapArray.set("USA", "United state of america");
mapArray.set("fr", "France");
mapArray.set("IN", "India");

for ([key, value] of mapArray) {
  //   console.log(key, ":", value);
}

const myObject = {
  js: "Javascript",
  ts: "Typescript",
  cpp: "C++",
  py: "Python",
};

for (key in myObject) {
  //   console.log(myObject[key]);
}
for (item in arr) {
  //   console.log(arr[item]);
}

for (key in mapArray) {
  //   console.log(key);
}

const coding = ["js", "ts", "python", "c++"];

// coding.forEach(function (item) {
//   console.log(item);
// });

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
