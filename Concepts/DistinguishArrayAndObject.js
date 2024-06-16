const arr = [];
const obj = {};
console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof arr == typeof obj); // true

console.log(Array.isArray(arr)) //true
console.log(Array.isArray(obj)) //false


