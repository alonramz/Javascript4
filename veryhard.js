// *VERY HARD: You are given coins of different denominations
// and a total total of money total.

// Write a function to compute the fewest number of coins
// that you need to make up that total.
// If that total of money cannot be made up by any
// combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps
// Use functions, arrays and logical operators.

// Do not have anyone give you the answer or solve this problem for you.
// Example 1:
// Input: coins = [1, 2, 5], total = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], total = 3
// Output: -1
// Note: You may assume that you have an infinite number
// of each kind of coin.
//

let arr = [1, 2, 5];
let total = 11;
let coins = (arr = [], total = 1) => {
   let changes = [];
   changes[0] = 0;
   while(changes.length <= total){
      let change = Math.pow(2, 31) - 1;
      for (let i = 0; i < arr.length; i++) {
         if (changes.length - arr[i] < 0){
            continue;
         };
         change = Math.min(change, 1 + changes[changes.length - arr[i]]);
      };
      changes.push(change);
   };
   return changes[total] == Math.pow(2, 31) - 1 ? -1 : changes[total];
};
console.log(coins(arr, total));
console.log("11 = 5 + 5 + 1")