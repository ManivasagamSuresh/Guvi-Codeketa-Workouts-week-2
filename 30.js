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
//  console.log(a);
 let b = a.filter((element)=>{
     return element%2 === 0;
 })
console.log(...b.sort());

let c = a.filter((element)=>{
     return element%2 !== 0;
 })
console.log(...c.sort());

  //end-here
});