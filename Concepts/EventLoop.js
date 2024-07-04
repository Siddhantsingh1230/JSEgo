// ---Setting---
// JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions (MDN).
// JavaScript is a single threaded language
// What does single threaded means
// A single-threaded language is one that can execute only one task at a time.
// That means JS has only single Stack (call stack)

// JS executes the code using various JS Engines such as V8 (Chrome) , Chakra(Edge) , SpiderMonkey(Firefox)
// These engines help to convert our JavaScript program into computer-understandable language.
// -------------

// EventLoop: The Master Conductor of JavaScript
// EventLoop is the JavaScript `runtime model`, which is responsible for executing the synchronus and asynchronus code, collecting and processing events, and executing queued sub-tasks.

// EventLoop consists of follwoing main components
// 1. Call Stack
// 2. CallBack Queue
// 3. WebApis

// EventLoop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

// #1 CallStack
// The Call Stack is more than just a "simple stack." It's an essential component of JavaScript's execution model, ensuring that functions are invoked and executed in a controlled and predictable manner.
// -- Operations --
// Script starts: global execution context is created on the Call Stack.
// Functions called? New context gets pushed on top.
// Function done? Pop its context, back to caller.
// Repeat until Call Stack is empty (program ends).

// #2 Callback Queue:
// JavaScript is single-threaded, but it manages asynchronous operations (like waiting for network requests or timers) through the Callback Queue.
// -- Operations --
// When an async operation finishes, its associated callback function is added to the Callback Queue. The Callback Queue acts like a waiting area for these callbacks.

// #3 WebApis:
// Web APIs are provided by the browser and are not native to JavaScript (or Node.js environment) to extend JavaScript's capabilities beyond basic computations. They handle tasks like network requests, file manipulation, DOM manipulation, timers, and more.
// When you call a Web API function in your JavaScript code (e.g., fetch for network requests, setTimeout for timers), the actual execution doesn't happen immediately within the Call Stack.
// Instead, the Web API takes over the operation, which might involve waiting for network responses, interacting with the system, or scheduling tasks for later execution.
// once the timer or response is completed the result is then moved to the callback queue and from callback queue to call stack

// Some WebAPIs
// Web Storage API, Console, Cache, Canvas API , Timer APIs , DOM , Geolocation API , Fetch API ,Clipboard API , Navigation API etc etc...

