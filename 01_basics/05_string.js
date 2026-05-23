const name = "Nilesh";
const repoCount = 10;

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Casa grand");
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(typeof gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const subString = gameName.substring(0, 4);
console.log(subString);

const sliceString = gameName.slice(-9, 5);
console.log(sliceString);

const trimString = "  Hello   ";
console.log(trimString);
console.log(trimString.trim());

const urlReplace = "https:/nilesh.com/nilesh%20dhokrat";

console.log(urlReplace.replace("%20", "-"));
console.log(urlReplace.includes("nilesh"));
console.log(gameName.split(" "));
