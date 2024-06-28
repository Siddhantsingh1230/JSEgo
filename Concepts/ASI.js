// ASI
// Automatic Semi Colon Insertion
// It is afeature of JS to add semicolons automatically inside your JS Code
// Usually omitting a semi-colon is considered to be a bad norm

// let's see the ASI in action

const createFooObject = () => {
  return;
  {
    foo: "Siddhant-Bar";
  }
};

console.log(createFooObject());
// expected output : {foo: "Siddhant-Bar"}
// correct output: undefined

// explaination: Closely watch line 9: At line 9 JS parser will automatically inject `;` after return keyword and hence the execution returns with undefined

// solution
const createBarObject = () => {
  return {
    bar: "Siddhant-foo",
  };
};
console.log(createBarObject());
// { bar: 'Siddhant-foo' }
