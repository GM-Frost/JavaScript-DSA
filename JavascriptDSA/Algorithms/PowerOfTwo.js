// Given a positive integern 'n', determine if the number is a power of 2 or not

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); // returns true
console.log(isPowerOfTwo(2)); // returns true
console.log(isPowerOfTwo(5)); // returns False
console.log(isPowerOfTwo(8)); // returns True

//BIG O = O(Log(n))
