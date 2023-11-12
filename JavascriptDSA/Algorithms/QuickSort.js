// Given an array of integers, sort the array.
// Sorting can be ascending or descending
// Quick Sort -> Identify The pivot element (the last element)

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivotElement = arr[arr.length - 1];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivotElement, ...quickSort(right)];
}
const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6,-2,4,8,20]

// Worst Case Complexity -> O(n^2) BIG O -> Quadratic Time Complexity
// Average Time Complexity -> O(Log(n)) -> Big O->
