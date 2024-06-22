// Currying
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a series of unary functions

// Let's understand it using an example

const addTwoNums = (x, y) => {
  return x + y;
};
// 7
// To Solve this problem we can use `currying`
// `currying` uses `closure` at its disposal

// let create one currying function
const add = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

const add2Num = add(2);
// Here even `add(2)` function is executed and returned the scope is still intact with respect to add2Num and hence using the power of closures we curried the `add2Num` Function

// Another way of writing same thing is
// suppose i want multiplication of three umbers to be carried out how can i do that

const multiply = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

console.log(multiply(4)(5)(3)); // 60

// Advantage of currying
// We can break the multiple stage of function process into fragments where each fragment does their own set of computation and returns the closure with the next functionality to be carried out , It becomes easy to debug and maintain
