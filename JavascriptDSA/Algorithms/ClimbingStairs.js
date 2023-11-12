/** 
* CLIMBING STAIRCASE
*
/
// Problem: Given a stairscase of 'n' steps, count the number of distinct ways to climb to the top
You can either climb 1 step or climb 2 steps at a time
If you have to climb to step'n', we can only climb from step 'n-1' or 'n-2'

Calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two

*/

function climbingStairscase(n) {
  const numberofways = [1, 2];
  for (let i = 2; i <= n; i++) {
    numberofways[i] = numberofways[i - 1] + numberofways[i - 2];
  }

  return numberofways[n - 1];
}

console.log(climbingStairscase(1)); // 1
console.log(climbingStairscase(2)); // 1
console.log(climbingStairscase(3)); // 1
console.log(climbingStairscase(4)); //
console.log(climbingStairscase(5)); // 8
