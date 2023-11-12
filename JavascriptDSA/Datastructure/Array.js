/** ARRAYS
 *
 */

const arr = [1, 2, 3, "Nayan"];
arr.push(4);
arr.unshift(0); //Add Beginning of array
arr.pop();
arr.shift(); //Remove from beginning of array
for (const item of arr) {
  console.log(item);
}

// Map, filter, concat, slice and spice

// BIG O
// Insert /remove from end - O(1) -> Constant
// Insert /remove from beginning - O(n)-> Linear
// Access - O(1) -> Constant
// Search - O(n) -> Linear
// Push / Pop - O(1)-> Constant
// shift/unshift/ concat/ Slice /Spice - O(n) -> Linear
// forEach/map/filter/reduce -> O(n) -> Linear
