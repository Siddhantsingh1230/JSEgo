// Promises
// The most used concept in asynchronous JavaScript
// In real life `Promises` can be fulfilled or can be failed
// Similarly in JavaScript ,A Promise is an object which contains some data, it either can be fulfilled or can be rejected.
// Promise objects are immutable

// Promise can remain in three States
// 1.Pending - This is the initial state of a promise at the time of its creation, before the server responds to the client or a before timeout error occurs.
// 2.Fulfilled - This is final State of a promise if the action is fulfilled successfully by the server or resource
// 3.Rejected - This is also a final State of a promise which occurs when a promise action is rejected or falls into some errors

// Terms related to Promise (A Class in JS)
// Promise() constructor
// .then() method
// .catch() method
// .finally() method

// Promise creation
// A promise constructor take an callback function which contains two parameters resolve and reject which are themselves a functions which are used to controll the state of promises to either resolve or reject
const promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("MY ANY DATA");
  }, [1000]);
});

const promiseObj2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("MY ANY DATA Failed to Fetch.ERROR!");
  }, [1000]);
});

// Promise use
// The `.then()` method is called if the promise is resolved, while the `.catch()` method is called if the promise is rejected.
// Both .then() and .catch() methods take a callback function
// The parameters of the `.then()` and `.catch()` methods receive the arguments passed to the `resolve` and `reject` functions, respectively.

promiseObj.then((res) => console.log(res)).catch((error) => console.log(error));
// MY ANY DATA

promiseObj2
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
// MY ANY DATA Failed to Fetch.ERROR!

//.finally()
// Sometimes, you might need to run a piece of code regardless of whether a promise is fulfilled or rejected. In such cases, you can use the `.finally()` method to wrap that code.
// It takes a callback function as the argument

promiseObj
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log(`end of promise`);
  });
// MY ANY DATA
// end of promise

// Promise chaining
// In a scenarios when u have to do perform some async operations which are dependent on other async operations to occur first we can use promise chaining

p1.then((dataofp1) => {
  return p2;
})
  .then((dataofp2) => {
    return p3;
  })
  .then((dataofp3) => {
    return p4;
  })
  .catch((error) => console.log(error));

//   Suppose p1,p2,p3 and p4 are promise objects
//   In the above code, if `p1` resolves, the `.then()` method attached to `p1` is called. Within the `.then()` method of `p1`, another promise `p2` is returned. The second `.then()` method will be called only if the `p2` promise resolves, and this chaining continues. If any promise in the chain is rejected, the `.catch()` method is called directly, skipping all subsequent `.then()` methods.

// Promise API's (Most used Static methods of Promise Class)
// • Promise.all()
// • Promise.allSettled()
// • Promise.race()
// • Promise.any()

// Above all methods takes an itterable object containing promises as input
// All promises in itterable object are executed parallely

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, [1000]);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, [2000]);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, [3000]);
});

// 1.Promise.all()
Promise.all([p1, p2, p3])
  .then((values) => console.log(values))
  .catch((error) => {
    console.log(error);
    // this error is thrown by the first rejected promise
  });
// waits for max three seconds (if none of the promises are rejected) and prints the resolved value of all promises
// [1,2,3]

// If any of the promises in `Promise.all()` get rejected, `Promise.all()` will immediately reject with the error of the rejected promise, halting further execution of the remaining promises.

// 2.Promise.allSettled()
Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));
// output is an array of objects
// [
//   { status: "fulfilled", value: 1 },
//   { status: "fulfilled", value: 2 },
//   { status: "fulfilled", value: 3 },
// ];

// It works similarly to `Promise.all()` for all successful promises. However, if any of the promises are rejected still it will wait until all promises are settled. "Settled" means that each promise has either been resolved or rejected.
// if any promise is rejected
// [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", value: "some error" },
//   { status: "fulfilled", value: 3 },
// ];

// 3.Promise.race()
Promise.race([p1, p2, p3])
  .then((firstSuccessvalue) => {
    console.log(firstSuccessvalue);
    // this value is printed by the first resolved promise
  })
  .catch((firstFailedvalue) => {
    console.log(firstFailedvalue);
    // this error is thrown by the first rejected promise
  });
// `Promise.race()` is a another static method that returns a promise resolving or rejecting as soon as the first promise in an iterable resolves or rejects (settles). It's useful for handling time-sensitive operations, such as timeouts or receiving the first response among multiple sources.
// In layman terms It's like a race between all promises of the itterable list, whoever comes first will get returned and execution of `Promise.race()` will get halted ( now coming first here means first settled promise , this promise may be resolved or  be rejected)

// 3.Promise.any()
Promise.any([p1, p2, p3])
  .then((firstSuccessvalue) => {
    console.log(firstSuccessvalue);
    // this value is printed by the first resolved promise
  })
  .catch((AggregateErrors) => {
    console.log(AggregateErrors.errors());
    // this error is thrown when all promises are rejected, containing all rejected values
  });
// `Promise.any()` is a same as `Promise.race()` but  returns a promise as soon as any of the promises in an iterable resolves first. It's the opposite of `Promise.all()`, which waits for all promises to resolve. If all promises are rejected, `Promise.any()` rejects with an `AggregateError` containing all rejection reasons.
// Seeks first resolved promise in the itterable
// aggregateErrors are like : [error1,error2,error3...]
