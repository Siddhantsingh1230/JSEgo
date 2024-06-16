// Pure functions are derived mathematical concepts of pure functions
// In Mathematics, A Pure function is a function that always returns the same output for the same input, and it does not have any side effects.
// does not have any Side effects is something that means once the pure functions executes it does not change any state/other variables of the system or outside its environment/scope

// Pure function example
const state = 1;
const state2 = 2;
const iMPure = (state) => {
  return state * 5;
};

// no matter how many times you the run the function for same output it will return same input
// state and state2 remained untouched 
console.log(iMPure(state)) // 5
console.log(iMPure(state)) // 5
console.log(iMPure(state2)) // 10
console.log(iMPure(state2)) // 10