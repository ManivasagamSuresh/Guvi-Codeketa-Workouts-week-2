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
var s = userInput[0].split(' ');
 
let x = (  (-1*s[1]) + Math.sqrt( ( Math.pow(s[1],2) ) -  (4*s[0]*s[2])   )   ) / ( 2*s[0] );
let y = (  (-1*s[1]) - Math.sqrt( ( Math.pow(s[1],2) ) -  (4*s[0]*s[2])   )   ) / ( 2*s[0] );

console.log(x.toFixed(2));
console.log(y.toFixed(2));

  //end-here
});