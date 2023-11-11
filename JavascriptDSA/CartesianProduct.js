/** 
* CARTESIAN PRODUCT
*
/
// Problem: Givent tow finite non-empty sets, find their Cartesian Product.
// Input: Two sets, A and B.
// Output: A x B.
// Example
// Input: {1, 2, 3}, {4, 5, 6}
// Output: {(1,4), (1,5), (1,6), (2,4), (2,5), (2,6), (3,4), (3,5), (3,6)}
// Explanation: The Cartesian Product of A and B is the set of all ordered pairs (a,b) where a is in A and b is in B.

*/

function cartesianProduct(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
const arr1 = [1, 2];
const arr2 = [4, 5, 6];
console.log(cartesianProduct(arr1, arr2));
