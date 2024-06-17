// Time oriented code execution can be achieved using JS Timing functions
// These are global functions in JavaScript
// All timing functions are asynchronous in nature, meaning that the timer will not pause the execution of other functions in the functions stack
// There are 3 Types of Timing Functions in JavaScript
// 1.setTimeout()
// 2.setInterval()
// 3.requestAnimationFrame() (takes only 1 argument, which is a callback function)

// Generally all these functions take atmost 2 arguments
// 1st Argument is a callback function  (mandatory)
// 2nd Argument is the time duration/delay in `milliseconds` (optional as default time is 0ms)

// 1. setTimeout()
// `setTimeout()` is used to execute code after a specified delay. It can also accept more than two arguments, as its design includes the third parameter as a rest parameter. This means you can pass additional arguments, which will be passed to the callback function when it executes.

setTimeout(() => {
  console.log("JS got printed after 2 seconds of delay");
}, 2000);
// JS got printed after 2 seconds of delay

// SetTimeout with parameters
setTimeout(
  (argument1, argument2, argument3) => {
    console.log(
      `Args are ${argument1},${argument2},${argument3} after 2 seconds`
    );
  },
  2000,
  1,
  2,
  3
);
// Args are 1,2,3 after 2 seconds

// Stop setTimeout from executing
const myTimeOutReference = setTimeout(() => {
  console.log("Hello world! I Will never get printed due to JS Corruption 🥲");
}, [1000]);
clearTimeout(myTimeOutReference);

// 2. setInterval()
// setInterval() is same as setTimeout() but executes continously and repeatedly untill the intervalReference is cleared

const myIntervalReference = setInterval(
  (arg1, arg2, arg3) => {
    console.log("I'm Happy", arg1, arg2, arg3);
  },
  2000,
  1,
  2,
  3
);

// I'm Happy123
// I'm Happy123
// I'm Happy123
// ...

//  stop/clear interval
clearInterval(myIntervalReference);

// Interview Questions
// 1.
const delay = 0; // no matter what delay is used output is same
for (let count = 0; count < 3; count++) {
  setTimeout(() => {
    console.log(count);
  }, delay);
}
// output
// 0
// 1
// 2

// 2.
const delay2 = 0; // no matter what delay is used output is same
for (var count = 0; count < 3; count++) {
  setTimeout(() => {
    console.log(count);
  }, delay2);
}
// output
// 3
// 3
// 3

// Explaination :
// When control enters the `for` loop and encounters the `setTimeout()` function, the `setTimeout()` call is initiated but its execution is suspended because it is an asynchronous operation managed by the Web API. The `setTimeout()` call is then sent to the callback queue, and the loop proceeds to the next iteration. This process repeats until the `for` loop completes. Once the loop has finished executing, the `setTimeout()` callbacks in the callback queue are then executed.

// When we used let to declare the loop variable, we got the output 0, 1, 2 because let (and const) creates a new lexical environment or block scope for each iteration of the loop. This means each iteration has its own separate count variable with the correct value, resulting in 0, 1, 2 being printed as expected. In contrast, when we use var to declare the loop variable, there is only one count variable shared among all iterations. As a result, the final value of count (after the loop completes) is used in all the setTimeout callbacks, leading to repeated outputs of the final loop value.


// Bonus Using Var and IIFE
// 3.
const delay3 = 0; // no matter what delay is used output is same
for (var count = 0; count < 3; count++) {
  ((i)=>{setTimeout(() => {
    console.log(i);
  }, delay3)})(count);
}
// output
// 0
// 1
// 2