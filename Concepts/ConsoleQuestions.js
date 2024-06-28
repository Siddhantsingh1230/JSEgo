// Boolean(null) = false
// Boolean(undefined) = false
// Boolean (1)= true
// Boolean(-1) = true
// Boolean(0) = false
// Boolean(Symbol)= true
// Boolean(()=>{}) = true
// Boolean(Number) = true
// Boolean(Boolean) = true
// Boolean(String) = true
// Boolean(Nan) = false

// undefined == null // true
// undefined === null // false

// console.log(Number(null)) // 0

// console.log(Number()) // 0
// explaination: Number(`empty`) means we are actually passing nothing in number constructor and as we know that Number(null) = 0 , we got zero here

// Number(undefined) // NaN
// Number(NaN) // NaN

// null >= 0 // true
// null <= 0 // true
// null == 0 // false

// null is falsy ,but not false
// !!null // false
// null == false // false

(function () {
  var a = (b = 2);
})();
// console.log(typeof a); // undefined
// console.log(typeof b); // number
// explaination: var a inside a fxn is only accessible inside the function scope therefore outside it is undefined or simply does not exists but for `b` it is accessible outside due to a fact that b is a global variable as var a=b=2; is the shorthand for saying b=2;var a=b and whenever you write something like just b = 2 it behaves as a global variable and get attached to the window object which makes it's scope global

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false

console.log("siddhant foo".split()); // ["Siddhant foo"]
console.log("siddhant foo".split("")); // ['s', 'i', 'd','d', 'h', 'a','n', 't',' ', 'f', 'o', 'o']

console.log(1 + "2" + "2"); // 122
console.log(1 + +"2" + "2"); // 32
console.log(1 + -"2" + "2"); // -12
console.log(1 + -"1" + "2"); // 02
console.log(+"1" + "1" + "2"); // 112
console.log("A" - "B" + "2"); // NaN2
console.log("A" - "B" - "2"); // NaN

console.log(false == "0"); //true
console.log(false === "0"); // false

console.log("0 || 1 = " + (0 || 1)); // 1
console.log("0 || 1 = " + (0 || false)); // false
console.log("1 || 2 = " + (1 || 2)); // 1
console.log("0 && 1 = " + (0 && 1)); // 0
console.log("1 && 2 = " + (1 && 2)); // 2

console.log(true>1) // false
console.log(true<1) // false
console.log(true == 1) // true

console.log(1<2<3) ; // true
console.log(3>2>1) ; // false

console.log(typeof undefined == typeof NULL) // true

// console.log(typeof typeof ) syntax error
console.log(typeof typeof 1 ) // string
