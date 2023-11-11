//Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

function binarySearch(arr, target) {
  let array = arr;
  let sortedArray = array.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === sortedArray[middleIndex]) {
      return middleIndex;
    }
    if (target < sortedArray[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
  return sortedArray;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Returns 4
console.log(binarySearch([-5, 2, 4, 6, 10], 2)); // Returns 1
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // Returns 3
console.log(binarySearch([-5, 2, 4, 6, 10], -5)); // Returns 0
console.log(binarySearch([-5, 2, 4, 6, 10], 4)); // Returns 2
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // Returns -1
console.log(binarySearch([2, 6, 4, -5, 10], 4)); // Returns 2

//Big O(log(n)) -> Time Complexity is O(log(n))
