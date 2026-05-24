//Immediately Invoked function expressions
//iife is used for remove global scope polution
/*
syntax
    ()() the 1st one is defination and 2nd one is execution 
point
    for the IIFE close need to use ; 
 */

(function chai() {
  //name IIFE
  console.log("DB Connected");
})();

((name) => {
  console.log(`Db connected two ${name}`);
})("Nilesh");
