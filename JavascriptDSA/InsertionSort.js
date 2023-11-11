function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arrNew = [-13, -5, 3, 4, 5, 49, 29];
const arr = [4, -5, 29, -13, 49, 5, 3];
insertionSort(arrNew);
console.log(arrNew);
