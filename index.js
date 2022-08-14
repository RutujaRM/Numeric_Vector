/*
Write a JavaScript program to find the sum of squares of a numeric vector.

*/

function sum_sq(array) 
{
    let sum = 0, 
        i = array.length;   //store array length
    
     while (i--) 
     sum += Math.pow(array[i], 2); //The Math.pow() method is used to power of a number
    return sum;  
  }
   
  console.log(sum_sq([0,1,2,3,4,5,7]));  //her we pass the values
  document.write(sum_sq([0,1,2,3,4,5,7]));