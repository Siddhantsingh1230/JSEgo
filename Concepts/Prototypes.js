// Prototypes
// The term "prototype" literally refers to the first or preliminary version of a device, system, or product from which later versions are developed or refined. This initial model is used to test and validate concepts, functionalities, and design choices before full-scale production or further development.

// So What a `prototype` in JS originally is ?
// `prototype` is a simple Object that's it.

// What does it contains ?
// it contains many properties and methods

// Why prototypes were created ?
// Prototypes are the mechanism by which JS objects inherit features from one another
// doesn't this statement smells like `inheritance` of classical programming , yes it is , In JS there is nothing like inheritance we see in other languages , here features are inherited by using `prototypes` and `prototypal inheritance` , New Gen Syntax that we see like `class` and `extends` are just Syntactic Sugar over these `prototypes` to make life more easier , but down the hood it's all prototypes!

// Pre-requisite Knowledge

// Hard thing to Swallow:
// Everything in JavaScript is an Object
// All functions and primitve , non primitive datatypes are also objects
// Proof that function and variables are objects

function myObjFun(k, f) {
  // i do nothing
}

console.log(myObjFun.length); // `.length` on a function returns number of parameters used
// 2
// ever wondered how a funtion can have length property , it's only possible if its originally an object ,
// there are many other properties apart from the `.length`
// even we can attach arbitrarily any properties and methods to a function just like we can do with JS Objects

myObjFun.star = "Siddhant";
myObjFun.sayHello = () => {
  console.log("hello");
};
console.log(myObjFun.star); // Siddhant
myObjFun.sayHello(); // hello

// Similarly variables are also objects

let myNum = 2;
console.log(myNum.toString()); // 2
// .toString method is in the `prototype` of `myNum`

// Now let us understand what the heck is this `prototype` clearly

// Object is the super class of all objects in JavaScript be it arrays , functions or other datatypes
// Object contains a property called `prototype` , this is an object
// this `prototype` is then passed down to every thing you see in JavaScript like arrays or other objects
// a `prototype` can refer to two values 1st. Object or  2nd.null

// When you access some methods and properties on any object then JSEngine looks  the object for the asked identifier, if the identifier is not present in the object itself then the prototype is checked if the prototype does not contains asked indentifier the protoype's prototype is checked untill the identifier is resolved or null is returned,

// let us understand what i'm talking about when i say prototype's prototype
// Let's Say we have an array
let myArr = [1, 2, 3, 4, 5];
// the above sentence actually looks like `let myArr = new Array([1,2,3,4,5]) ;`
// so it's safe to assume that all arrays are instances of this `Array` class
// even we know that `Array` has inherited  from the `Object` class as it is the super class of all objects,
// So a `prototype` chain is created due to this inheritance.

// `prototype` contains the constructor functions and methods through which it was created
// Key Points always remember in  case of `prototypes`
// to access the prototype through instances we have to use `__proto__`;
// to access the prototype through class we have to use `prototype`;

// For example
// Accessing `prototype` of Array class
console.log(Array.prototype); // here `Array` is a class so i used `prototype` to access it's `prototype`
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, ... [[prototype]]]

// Accessing `prototype` of instance of a class
console.log(myArr.__proto__);
// As myArr is an instance of `Array` class ,so i used `__proto__` to access its prototype
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, ... [[prototype]]]

// the above results tell about the overall structure of Array class through which it was built
// It contains many methods and also contain a `prototype`
// Now this `prototype` you see here is the `prototype` of the Object class
// this `prototypes` tells How `Object` class was built (tells structure of object class)
// Up Above the `Object` there are no `prototypes` , as Object class is the last Class on the chain
console.log(Object.prototype.prototype);
// undefined

// So that also implies that  `prototype` of the parent is accessible to the child but not vice-versa
// and this is how a chain of `prototypes` are created

// proof that `prototype` tells the structure of the class
class Emotions {
  constructor(san, int, bal) {
    this.sanity = san;
    this.integrity = int;
    this.balance = bal;
  }
  burst() {
    console.log(
      `Your Emotions are ${this.balance}, ${this.sanity} and ${this.integrity}`
    );
  }
}

console.log(Emotions.prototype);
// Structure of Emotions class is hown below
// {burst: ƒ burst(),constructor: class Emotions[[Prototype]]: Object }

console.log(new Emotions(1, 2, 3).__proto__);
// {burst: ƒ burst(),constructor: class Emotions[[Prototype]]: Object }

// Applications of prototypes
// `prototype` is used to share properties and methods across different objects

let obj1 = {
  name: "Siddhant",
  role: "JSDev",
  action: function () {
    console.log(this.name + " " + this.role);
  },
};

let obj2 = {
  name: "Sanidhya",
  role: "CTO",
};

// what if i want to do something like this
// obj2.action() // Error: obj2.action is not a function

// With the help of `prototype` i can share action method to obj2 also
// We can modify and access prototypes using `.__proto__` on an object instance  and `.prototype` on a class

obj2.__proto__.action = obj1.action;
// here i', adding a action method of obj1 to the prototype of obj2
console.log(obj2.__proto__);
// {action: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

obj2.action();
//  Sanidhya CTO

// This is how methods as well as properties can be shared between objects using `prototype`

// Sharing using prototype of a class
// Problem : I want any two universal arrays to be concatenated and want a string "BhaiBhai" in between those two arrays as single output

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

// arr1.bhaibhai(arr2); // Error: arr1.bhaibhai is not a function

// solution:
Array.prototype.bhaibhai = function (array) {
  console.log(this + " BhaiBhai " + array);
};
// we modified Array class `prototype` and attached new method which is now available to all instances of `Array` class

arr1.bhaibhai(arr2);
// 1,2,3,4 BhaiBhai 5,6,7,8
arr2.bhaibhai(arr1);
// 5,6,7,8 BhaiBhai 1,2,3,4

// Interview Questions

console.log(Object.__proto__);
// ƒ () { [native code] }
console.log(Object.prototype);
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

console.log([12, 3, 4].__proto__.__proto__.__proto__); //null
const myFun = () => {};
console.log(myFun.__proto__.__proto__.__proto__); //null

const objLiteral = {
  // whatever
};
console.log(objLiteral.__proto__.__proto__); // null
// All object literals are created using `Object` class `new Object({})`
// As objLiteral.__proto__ is same as Object.prototype , therefore there exist  no `prototype` before this

// object using class
class MyClassObj {
  // whatever
}
console.log(new MyClassObj().__proto__.__proto__.__proto__); // null
// This object is not create using  `Object` class  hence the output
// as
//                             Object
//                               ⬆️
//                             MyClass


// Prototypal Inheritance
// JavaScript follows `prototypal` inheritance model that means objects of sub class will contain parent's 'prototype`.
