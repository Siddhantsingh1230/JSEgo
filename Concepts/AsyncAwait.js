// Async and Await
// These two are commonly used keywords in JS to handle API calls and go hand in hand with each other
// Async is used to make a function asynchronous and is a cleaner way of handling promises
// It removes the callback hell/pyramid doom and promise chaining
// Async function always returns a promise no matter what you return from the function
// Another Important thing to note here is if you return a promise from a async function it wont be wrapped again inside another promise it just will be returned as it is
// Await can only be used with async functions (only inside a async fxn)
// Syntax
// async function myAsyncFun(){

// }
// for arrow fxns
const myAsyncFun = async () => {
  return "Siddhant";
};
console.log(myAsyncFun());
// Async Always wraps the content in the promise no matter whatever you return or return not at all
// Promise {<fulfilled>: 'Siddhant'}
// Now to get data from promise we can use .then method of promises
const response = myAsyncFun();
response.then((response) => console.log(response)); // Siddhant

// To Access resolved data we have to write above lines of code so `Await` came into existence
const myAwaitAsyncFun = async () => {
  myResponse = await new Promise((resolve, _) => resolve("Siddhant"));
  // const myResponse = await fetch("https://api.github.com/users/siddhantsingh1230");
  // At the place of new Promise u can hit a endpoint using fetch() Api
  console.log(myResponse);
};
myAwaitAsyncFun(); // Siddhant

// Interview Question
// Q. How Async/Await is different then Promise way of handling Apis

// I. Older Way
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Siddhant");
  }, [3000]); // After 3 Seconds of this promise will be resolved
});

let getData = () => {
  myPromise.then((response) => console.log(response));
  console.log("After Promise");
};

getData();
// After Promise => this line is consoled first
// Siddhant => this line is consoled after 3 seconds

// So in Promises the code after the promise.then() is also executed , does not waits for myPromise.then() to get resolved first

// But in Async and Await things works little differently , whatever you write after the await statement will not be executed untill the await line resolves the promise

getData = async () => {
  const response = await myPromise; //JS will Wait here for 3 seconds untill setTimeout runs to 0
  console.log("After Promise");
  console.log(response);
};
getData();

// After 3 seconds
// After Promise
// Siddhant

// Interview Question
// Q.Two Await Problem in Async

const promise1 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, [3000]);
});
const promise2 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, [5000]);
});

const handlePromises = async () => {
  const startTime = performance.now();
  console.log("Started");
  const p1 = await promise1;
  console.log(p1, `+ ${performance.now() - startTime}`);
  console.log("Promise 1 end", `+ ${performance.now() - startTime}`);
  const p2 = await promise2;
  console.log(p2, `+ ${performance.now() - startTime}`);
  console.log("Promise 2 end", `+ ${performance.now() - startTime}`);
};

handlePromises();
// Started - got printed immediately
// waits for 3 seconds on line `const p1 = await promise1;`
// then prints
// promise 1 resolved + 3005.0122
// Promise 1 end + 3007.1039
// waits for 2 seconds more on line `const p2 = await promise2;`
// then prints
// promise 2 resolved + 5012.5689999999995
// Promise 2 end + 5013.628199999999

// Another Major difference is Error Handling in Promises We use .catch() chaining to handle errors
// but in async await we use try catch block to handle errors

// Promise
getData = () => {
  myPromise
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
// Async+Await
getData = async () => {
  try {
    const response = await myPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
