/** MAPS
* 
-> A map is an unordered collection of key-value pairs. Both key and values can be of any data types
-> To retrieve a value, you can use the corresponding key
-> Maps are iterable, so you can use a for...of loop to iterate over the map
-> Maps are mutable, so you can change the values of the map after it has been created
-> Maps are ordered, so you can use the map.get() method to retrieve the value of a key 
*/

/** 
      OBJECTS VS MAP

    -> Objects are unordered whereas maps are ordered
    -> Keys in objects can only be string or symbol type whereas in maps, they can be of any type
    -> An object has a prototype and may contain a few default keys which may collide with your own keys if you are not careful. A map on the other hand does not contain any keys by default
    -> Object are not iterables where as maps are iterables
    -> The number of items in an object must be determined manually where as it is readily available with the size property in a map
    -> Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.
*/

const map = new Map([
  ["a", 1],
  ["b", 2],
]); //Create constructor

map.set("c", 3);
map.delete("c");
console.log(map.has("a"));
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
map.clear();
