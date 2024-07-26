// In JavaScript, there are nothing called required arguments.

const fxWithArgs = (requiredArg) => {
  console.log(requiredArg);
};

fxWithArgs(); // passing no args though it mandatory for my business logic
// undefined
// 👆 no error is thrown , but what if  time demands the use requirred argument and if not provided and suitable error must be thrown

// let's try to use the default argument to achieve this scenario

const throwError = () => {
  throw new Error("Argument is requirred");
};

const fxWithReqArgs = (requiredArg = throwError()) => {
  console.log(requiredArg);
};

fxWithReqArgs(); // Error: Argument is requirred
