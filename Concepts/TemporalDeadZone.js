// Definition: Temporal Dead Zone of variable/identifier is the area where any variable or identifier is hoisted but is inaccessible untill the variable is initialized with some value;

// Temporal Dead Zone
console.log(myVariable)
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
let myVariable; // let mymyVariable = "anything";
// Myvaribale is accessible



// other Examples:
// ex1:
// 1:console.log(siddhant) //refrence error cant access "siddhant" before intialization => this is proof that "s" is hoisted but not accessible untill line 2
// 2: let siddhant = 1

// ex2:
// 1: console.log(siddhant);// reference error "siddhant" is undefined

// ex3:
// 1:console.log(siddhant) //refrence error cant access "siddhant" before intialization => this is proof that "s" is hoisted but not accessible untill line 2
// 2: let siddhant ;