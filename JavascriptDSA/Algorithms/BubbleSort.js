// Given an array of integers, sort the array.
// Sorting can be ascending or descending
// Bubblesort

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [4, -2, 5, -7, -10, 23, 40, 3];
bubbleSort(arr);
console.log(arr);

//BIG O(n^2) -> Big O is quadratic time complexity -> Good for Sorting
