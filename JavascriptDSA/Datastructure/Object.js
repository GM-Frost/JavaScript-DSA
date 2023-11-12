/** OBJECT
 * -> Object is an unordered collection of key-value pairs. The key must either be  astring or symbol data type where as the the value can be of any data type.
 */

const obj = {
  name: "Heisenbergh",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "Football";
console.log(obj);

delete obj.hobby;

obj.sayMyName();

// Object.key() .values() .entries()

// BIG O
/** 
  Insert - O(1) -> constant
  Remove - O(1) -> constant
  Access - O(1) -> constant
  Search - O(n) -> linear
  Object.keys() - O(n) -> linear
  Object.values() - O(n) -> linear
  Object.entries() - O(n) -> linear
  
  */
