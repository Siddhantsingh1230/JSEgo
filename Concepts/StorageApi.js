// JavaScript provides several storage APIs for managing client-side data. These APIs allow you to store data locally within the user's browser. Here are the main storage APIs

// 1. Local Storage
// Local Storage is a synchronous storage API that allows you to store key-value pairs in a web browser with no expiration date. The data persists even after the browser is closed

// Save data to Local Storage
localStorage.setItem("dev", "JavaScript");
localStorage.setItem("name", "Siddhant");

// Retrieve data from Local Storage
const value = localStorage.getItem("dev");
console.log(value); // Outputs: 'JS'
const value2 = localStorage.getItem("name");
console.log(value2); // Outputs: 'Siddhant'

// Remove data from Local Storage
localStorage.removeItem("dev");

// Clear all data from Local Storage
localStorage.clear();

// 2. Session Storage
// Session Storage is similar to Local Storage, but it is session-specific. The data is only available for the duration of the page session (as long as the browser is open, including page reloads and restores).

// Save data to Session Storage
sessionStorage.setItem("sessionId", "123");

// Retrieve data from Session Storage
const sessionValue = sessionStorage.getItem("sessionId");
console.log(sessionValue); // Outputs: '123'

// Remove data from Session Storage
sessionStorage.removeItem("sessionId");

// Clear all data from Session Storage
sessionStorage.clear();

// There are two more Storage APIs
// 3.IndexedDB
// IndexedDB is a more powerful, asynchronous storage API for storing significant amounts of structured data (including files/blobs). It is a low-level API for client-side storage of large amounts of data.
// 4.Cookies
// Cookies are small pieces of data stored in the browser that can be sent back to the server with subsequent requests. They are typically used for session management, user tracking, and storing user preferences.
