const accountId = 10;
let accountEmail = "nilesh@gmail.com";
var accountPassword = "1234433";
/*
     prefer not to use var
     because of issue in block scope and functional scope
 */
accountCity = "Pune";
let accountState;

// accountId = 20; // not allowed to change
accountEmail = "lokesh@gmail.com";
accountPassword = "783874844";
accountCity = "Mumbai";

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
