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

  let a = userInput[0].split('');
// console.log(Number(a));
let b = a.reduce((acc,cur)=>
{return (+acc + +cur);})
console.log(b);

  //end-here
});