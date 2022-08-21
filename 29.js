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

   let a = userInput[0];
//  console.log(a);
 for (let i =2;i<=a;i++)
 { 
     if(i%2 === 0)
 {console.log(i);}
 } 

  //end-here
});