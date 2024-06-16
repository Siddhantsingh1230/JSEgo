// IIFE - Immediately Invocked Function Expression
// Syntax
(function () {
  let my_pvt_title = `Welcome to the World of JS`;
  console.log(my_pvt_title);
})();
// output
// Welcome to the World of JS

// In Real Life IIFEs are used in libraries to initialize the variables and thier library.context
// IIFEs are used to encapsulate the variables and functions to prevent polluting them from other global namespaces(Same name as that of variables/identifiers/functions in global scope)
// IIFEs are used to create private scope for variables and identifiers which are inaccessible outside this function expression

