let z = userInput[0].split(' ');
let x = z[0];
let  y= z[1]
// console.log(y);
// console.log(z);

// Javascript implementation of the approach

// Function to return the HCF of x and y
function getHCF(x, y)
{
   
   // Minimum of the two numbers
   var minimum = Math.min(x, y);

   // If both the numbers are divisible
   // by the minimum of these two then
   // the HCF is equal to the minimum
   if (x % minimum == 0 && y % minimum == 0)
       return minimum;

   // Highest number between 2 and minimum/2
   // which can divide both the numbers
   // is the required HCF
   for(var i = minimum / 2; i >= 2; i--)
   {
       
       // If both the numbers
       // are divisible by i
       if (x % i == 0 && y % i == 0)
           return i;
   }

   // 1 divides every number
   return 1;
}

console.log(getHCF(x,y));


