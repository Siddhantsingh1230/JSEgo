// Primitive types
console.log(typeof Number()); // number
console.log(typeof Number); // function
console.log(typeof NaN); // NaN is keyword not type => number
console.log(typeof BigInt(1)); // bigint
console.log(typeof BigInt); // function
console.log(typeof Infinity); // Infinity is keyword not type => number
console.log(typeof Symbol()); // symbol
console.log(typeof Symbol); //function
console.log(typeof Boolean); //function
console.log(typeof Boolean()); //Boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object



// Non primitive types
const myFunction =()=>{} // created for demo purpose
class myClass{} // created for demo purpose
console.log(typeof Array()); //object
console.log(typeof Object()); //object
console.log(typeof Object); // function
console.log(typeof {}); //object
console.log(typeof myFunction); // function
console.log(typeof myClass); // function
console.log(typeof new myClass()); // object
console.log(typeof String); // function
console.log(typeof String()); // String

// Interview Question
let a = {};
let b = a;
console.log(a==b); // true ,because `value` is checked here
console.log(a===b); // true , True because `value + type` is checked here which is her same, as objects and arrays are refrence types not value type


// # KeyTake Aways
// * Every Function identifier is type of function
// * Every Class identifier is type of function
// ~ Every new Class() returns object type
