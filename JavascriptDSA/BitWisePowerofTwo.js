// Given the positive integer 'n', determine the power of two using bitwise operations

function powerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }

  //using bitwise operations
  return (n & (n - 1)) === 0;
}

console.log(powerOfTwoBitwise(1)); // Returns True
console.log(powerOfTwoBitwise(2)); // Returns True
console.log(powerOfTwoBitwise(5)); // Returns False
console.log(powerOfTwoBitwise(8)); // Returns True
console.log(powerOfTwoBitwise(9)); // Returns False
