// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  
var r = userInput[0];
 if  ( r <  0)
 {console.log("Error");}
 else {var b = (2) * (Math.PI) *(r) ;
  b = b.toFixed(2);
     console.log(b);
 }

  //end-here
});