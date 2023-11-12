// Given a number 'n' find the nth element of the fibonacci sequence

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); //return 0
console.log(recursiveFibonacci(1)); //return 1
console.log(recursiveFibonacci(6)); //return 8

//BIG O(n) => Iterative
// O(2^n) => Recursive
// Not Recommended
