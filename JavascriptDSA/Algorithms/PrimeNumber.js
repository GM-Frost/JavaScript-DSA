function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//Big O(n) = linear Time Complexity

console.log(isPrime(5)); //True
console.log(isPrime(3)); //True
console.log(isPrime(7)); //True
console.log(isPrime(4)); //False
