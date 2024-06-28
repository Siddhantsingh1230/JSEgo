// This Keyword
// What is `this` in Javascript?
// `this` is simply an object referring to an another object that's it ( Most versatile object in JS).
// Now the fun part is the value of `this` changes according to the context it is used in

// 1. In Global Scope
// Note : `this` will refer to the gobal object of the runtime it's running on  in the global scope
// a. In Browser environmennt
// `this` refers to the `window` object
console.log(this);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// b. In Node Environment
console.log(this);
// {} points to the empty object

// 2. Local / Function Scope
// a(I). In Browser Environment (non strict mode)
function myFun() {
  console.log(this);
}
myFun();
// Again refers to the window object
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// a(II). In Browser Environment ( strict mode)
("use strict");
myFun();
// undefined

// explaination : there is a term called `this` substitution , According to this if the value of `this` is `undefined` or `null` then it will automatically  refer to the global object of that run-time may it be the browser , node or other run time, but `this` substitution  only works  in non strict mode

// b. In Node Environment
myFun(); // same output as of console.log(global)
// refers to the Global object
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  navigator: [Getter],
  crypto: [Getter]
} */

// 3. Inside an Object or a class

const myObj = {
  name: "Siddhant",
  objMethod() {
    return this.name;
  },
  getCurrentObject() {
    console.log(this);
  },
};
console.log(myObj.objMethod());
// Siddhant

// inside an object `this` refers to the object through which the method is invocked
myObj.getCurrentObject();
// refers to the `myObj` object
// {
//   name: 'Siddhant',
//   objMethod: [Function: objMethod],
//   getCurrentObject: [Function: getCurrentObject]
// }

// another example is with browser global object called `window`
function windowFun() {
  console.log(this);
}
window.windowFun(); // we have attached the `windowFun` function to the global window object
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

class Language {
  constructor(name) {
    this.name = name;
    // `this` here refers to the instance of Language class through which it is invocked
  }
  getCurrentObject() {
    console.log(this);
  }
}
const l1 = new Language("JavaScript");
l1.getCurrentObject();
// Language { name: 'JavaScript' }

// 4. `this` in arrow functions ()=>{}
// Arrow functions don't provide their own `this` binding, it contains the `this` value of it enclosing lexical context/environment
// let us understand the terms `enclosing lexical context` more clearly with some examples

// a. In Browser Environment
const myArrowFun = () => {
  console.log(this);
};
myArrowFun();
// here myArrowFun declaration is present in global scope/space so its lexical environment is also a global space/scope in the global scope `this` refers to the window object and hence the following putput was printed
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// b. In Node Environment
// In Node's Global scope/space `this` refers to the empty object and hence the following output was printed
myArrowFun();
// {} // this behaviour is different for normal functions in Node environment

// Note: So in short the the function's enclosing lexical environment will determine the value of `this`

// 5. `this` in an object's arrow functions
// Same above rules are followed here  the enclosing lexical environment is the environment where object is stuated and object is situated inside a global scope/space and hence we got the following output
const newObj = {
  objName: "Guru",
  objMethod: () => {
    console.log(this);
  },
};

newObj.objMethod();
// newObj is in global scope/space therefore `this` here refers to the Window object
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// 6. Arrow function in a different lexical environment then global scope

const crazyObj = {
  objName: "Crazy",
  objMethod() {
    // 👆 normal function ( not an arrow function)
    const arrowFun = () => {
      // 👈 arrow function
      console.log(this);
    };
    arrowFun();
  },
};
crazyObj.objMethod();
// { objName: 'Crazy', objMethod: [Function: objMethod] }

// what different happened here with `arrowFun()` this time ?
// So according to definitions Arrow function's `this` will refer to the `this` of its enclosing lexical environment, here the enclosing lexical environment is the environment inside the `objMethod` anf inside here `this` refers to the current object through which this method is invocked therefore 'this` inside the `arrowFun` also referred to the same object

// 7. `this` inside a dom
<p onclick="console.log(this)">Hii guys</p>;
// object.HTMLp
//  `this` here refers to the current HTML element through which it is invocked

// More interview Questions
// Q1
const obj = {
  foo: 1,
  func: function () {
    console.log("outter" + this);
    (function () {
      console.log("inner" + this);
    })();
  },
};
// Q2
obj.func();
// outter[object Object]
// inner[object Window]

const obj2 = {
  foo: 1,
  func: function () {
    console.log("outter" + this);
    function a() {
      console.log("inner" + this);
    }
    a();
  },
};

obj2.func();
// outter[object Object]
// inner[object Window]

// Q3
const crazyObj2 = {
  objName: "Crazy",
  objMethod() {
    // 👆 normal function ( not an arrow function)
    function arrowFun() {
      // 👈 normal function
      console.log(this);
    }
    arrowFun();
  },
};
crazyObj2.objMethod();
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// explaination : Function nested inside a function loses `this` context and start to refer global object

// Q4
const crazyObj3 = {
  objName: "Crazy",
  objMethod() {
    // 👆 normal function ( not an arrow function)
    const arrowFun = () => {
      // 👈 arrow function
      const arrowFun2 = () => {
        // 👈 arrow function
        console.log(this);
      };
      arrowFun2();
    };
    arrowFun();
  },
};
crazyObj3.objMethod();
// {objName: 'Crazy', objMethod: ƒ} 
// As we know arrow functions work differently then normal functions, arrow function follow `this` context based on their lexical scoping , so lexical scope of `arrowfun` contains `this` that points to the invocked object , since the lexical scope was maintained in nested function the `this` in lexical scope of `arrowFun2` is also referring to the same invocked object , this behaviour is not true for normal functions as normal function nesting doesnot preserve `this` context
