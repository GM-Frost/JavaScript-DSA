//find the factorial of number in JavaScript

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3)); //3*2*1 = 6
console.log(factorial(5)); //5*4*3*2*1 = 120
console.log(factorial(10)); // 10*9*8*7*6*5*4*3*2*1 =3,628,800
