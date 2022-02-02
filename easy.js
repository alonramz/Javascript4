// EASY: Write a function that takes in an array of numbers 
// and outputs the average of all the numbers. 

// Example 1:

// Input: [1 , 4 , 7]  Output: 4

// Input: [10, 5]  Output: 7.5

// Input: [1.5, 3, 2.5, 1]  Output: 2

x=[1.5, 3, 2.5, 1] ;
let sum = 0;
for(let i = 0; i < x.length; i++)
{
	sum = sum + x[i];
}
let average = sum / x.length;
console.log(average);

