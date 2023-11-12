/** SET
* -> Set is a data structure that can hold a collection of values. The values however must be unique
-> Set can contain a mix of different data types/ You can store strings, booleans, numbers or even objects all in the same set
-> Sets are dynamically sized. Meaning that you can add and remove items from the set as you wish.You don't have to declare the size of a set before creating it
-> Sets donot maintain an insertion order
-> Sets are iterables. They can be used with a for of loop
*/

/** 
      SET VS ARRAY

    -> Arrays can contain duplicate values whereas Sets caannot
    -> Insertion order is maintained in arrays but it is not the case with sets
    -> Searching and deleting an element in the set is faster compared to arrays
*/

const set = new Set([1, 2, 3]);

set.add(5); // To add value to set

// console.log(set.has(5))// To check if value exists in the set
// set.delete(3) // To delete the value from set

console.log(set.size); //Check the size of the set

set.clear();

// for(const item of set){
//   console.log(item)
// }
