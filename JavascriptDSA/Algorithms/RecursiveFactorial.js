// given a interger 'n', find the factorial of tht integer
// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to n.

function recursiveFactorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // Returns 1
console.log(recursiveFactorial(1)); // Returns 1
console.log(recursiveFactorial(2)); // Returns 2
console.log(recursiveFactorial(3)); // Returns 6
console.log(recursiveFactorial(4)); // Returns 24
console.log(recursiveFactorial(5)); // Returns 120
