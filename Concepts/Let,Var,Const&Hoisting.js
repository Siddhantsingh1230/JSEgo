// Var
// It is an older way of declaring variables in JS
// Has many security problems 
var a = 2
// All var declared variables are attached to window object
console.log(window.a) // 2 // will not work in nodejs as no window object is there in node
//The scope of a var variable is functional or global scope.
// it can be updated and re-declared in the same scope.
// These variables are hoisted.

// let and const
// `Let` and `const` are newer standards for declaring variables in JS
// `Let` declared variables are subject to change , they are mutable
// values of `const` declared variables are constant and subject to no change
// `const` variables are declared and initialized at same time else will throw error
// `const` variables  are immutable

let b = 1
const c = 3;

// All Let and const declared variables are not attached to window object
console.log(window.b) // undefined
console.log(window.c) // undefined
// The scope of a let and const variable is block scope.
// It can be updated but cannot be re-declared in the same scope.
// It can neither be updated or re-declared in any scope.   
// These variables are hoisted but stay in the temporal dead zone untill the initialization.



// # Hoisting
// In JavaScript, a variable can be declared before it can be used.
// In other words; a variable can be used before it has been declared.

x = 5; // Assign 5 to x
console.log(x) // x can be used before it is declared ,because x is sent at the top of program
var x; // Declare x
console.log(x)

// Strict Mode
// Strict mode makes it easier to write "secure" JavaScript.
// `use strict` to Stop Hoisting
"use strict";
x = 3.14;       // This will cause an error because x is not defined/declared