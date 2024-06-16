// Performance Api is an interface which provides access to performance-related information for the current page

// I use Performance Api to log time taken by the current line to execute
const Start = performance.now();
setTimeout(() => {
  console.log(`Time taken is ${performance.now() - Start}`);
}, 4000);

// Time taken is 4007.3702000000003