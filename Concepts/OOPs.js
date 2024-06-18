// OOPS - Object Oriented Programming System
// Most used programming paradigm in entire universe due to extreme resembalance to real life entities ,scenarios and use-cases.

// In JavaScript, when we talk about OOP, we mostly talk about classes and their objects. Classes in JavaScript are syntactic sugar over constructor functions, and objects are instances of these classes in memory.
// A class, in its purest form, can be seen as a blueprint that defines real-life objects.
// A Blueprint outlining how the object will look and behave when it comes into existence.
// A Class is not a physical entity its just an logical representation of real world problems and objects

// In JavaScript, the superclass of all objects is `Object`. Every object in JavaScript is ultimately derived from `Object.prototype`, which means that Object is the topmost prototype in the prototype chain.

// Objects in JavaScript
// Object is a collection of properties and methods
// It encapsulate logically related properties and methods in `key-value` pair format

// Object-Creation
// 1.Object creation using object literal
const myObj = {
  key1: "Hello",
  key2: () => {
    return "Im a method/function";
  },
};
console.log(typeof myObj); // object
// Object Key Access
// 1.Using dot notation
console.log(myObj.key1); // "Hello"
console.log(myObj.key2()); // "Im a method/function"

// 2.Using Box/Array notation
// Here Keys should be a `String`
console.log(myObj["key1"]); // "Hello"
console.log(myObj["key2"]()); // "Im a method/function"

// 2.Object creation using `new` and `Object()` constructor
const newObject = new Object();
console.log(newObject); // {} an empty object

// Attaching keys and values to Objects
// Note keys are always unique.If you use the same key twice, the later key will override the earlier one.
newObject.name = "Siddhant";
newObject.occupation = "JSDeveloper";
newObject.works = () => {
  console.log("Hello i work for nature");
};

console.log(newObject);
// {
//     name: 'Siddhant',
//     occupation: 'JSDeveloper',
//     works: [Function (anonymous)]
// }

// Keys can also be attached using dot notation
newObject["age"] = 19;
console.log(newObject);
// {
//     name: 'Siddhant',
//     occupation: 'JSDeveloper',
//     works: [Function (anonymous)],
//     age:19
// }

// 3.Object creation using `constructor` function
// Constructor functions are simple functions which are invocked using new keyword
// Constructor functions cannot be created using arrow functions as arrow functions does not support `this` keyword
// Any function invocked with new keyword in front of them returns an object with the same name as of the function
// Such functions are known as `constructor` functions and were heavily used before the `class` keyword was introduced to create objects
// This functions define the general structure of what objects will look like

function mySimpleFun() {
  console.log("Hello");
}
console.log(new mySimpleFun());
// Hello
// mySimpleFun {}

function Car(name, engine, color) {
  // this here refers to the invocking object
  this.name = name;
  this.engine = engine;
  this.color = color;
  this.start = function () {
    console.log(`Car of ${this.name} has ${this.engine} `);
  };
}
// here invocking object is audi , therefore this -> audi
const audi = new Car("Audi", "V8", "Red");
// here invocking object is bmw , therefore this -> bmw
const bmw = new Car("BMW", "V8 Twin Charge Turbo", "Blue");
audi.start(); // Car of Audi has V8
bmw.start(); // Car of BMW has V8 Twin Charge Turbo

// Interesting fact about object methods
console.log(audi.start === bmw.start); // false that means both functions are stored at different memory locations
// What if i want to make a common function/attribute to be used by all objects
// solution: Use prototype
// every function in Javascript has `prototype` as a key
// prototype is just an object
console.log(typeof Car.prototype); // object
// When we create an object using new keyword then the constructor function adds __proto__ key inside the object
console.log(typeof audi.__proto__); // object
console.log(typeof bmw.__proto__); // object

// when we attach anything to the prototype of the constructor function then it gets readily and commonly available to all the instances
Car.prototype.commonBoost = function () {
  console.log(`Boosting ${this.engine}`);
};

audi.commonBoost(); // Boosting V8
bmw.commonBoost(); // Boosting V8 Twin Charge Turbo
console.log(audi.commonBoost() === bmw.commonBoost()); // true that means this commonBoost is shared and common across all instances

// 4.Classes
// Classes are basically syntactic sugar over `constructor` functions that we used early, they are basically functions only.
// Classes are created using class keyword reserved in JS
// Classes encapsulate various Data-members(also known as fields/attributes/properties) and Data-member Functions(also known as methods/behaviours) which work together to solve a particular  programming problem
// Every Class contain a special function called as a `class constructor` function , as name suggest this function is used to create and initialize the object of this class
// Whenever a Class() is invocked with the `new` keyword an empty object of that class `{}` is created by calling constructor function of that class and new memory is allocated.
// difference between constructor function and class is following
// 1. Added validation
// constructor function can be called without using `new` keyword, but class cannot be called without `new` keyword if done so an error will be thrown
// 2. All Methods are stored inside the `prototype` of that class, we don't have to explicitly attach methods to `prototype`, that we were doing in case of `constructor` functions

// Class Creation
class Human {
  constructor(name, gender, age) {
    this.age = age;
    this.name = name;
    this.gender = gender;
  }
  //   console.log("hello") ; // this code will throw error due to added validation in `class` over `constructor` functions
  smile() {
    console.log(`${this.name} smiles at the age of ${this.age}`);
  }
}

const siddhant = new Human("siddhant", "male", 19);
console.log(siddhant); // Human { age: 'male', name: 19, gender: 'siddhant' } // smile is not present here as it is present in siddhant.__proto__
console.log(siddhant.__proto__); // {smile:f ,...}

siddhant.smile(); // siddhant smiles at the age of 19

// private fields/methods in classes

class Dude {
  // declare private fields outside the `class constructor`
  // all private fields are prefixed with `#` symbol
  // private fields are not accessible outside the class

  #style;
  constructor(name, age, gender, style) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.#style = style;
  }
  getStyle() {
    console.log(this.#style);
    this.#privateFun();
  }
  // Note: Private methods are not stored in Prototype of the class as normal methods do
  #privateFun() {
    console.log("Im pvt");
  }
}

const d1 = new Dude("Jr.JavaScript", 10, "Sentient", "Rock");
console.log(d1); // Dude { name: 'Jr.JavaScript', age: 10, gender: 'Sentient' ,#style: 'Rock' }
// console.log(d1.#style); // Error: Private field '#style' must be declared in an enclosing class
d1.getStyle();
// Rock
// Im pvt
// d1.#privateFun(); // Error can't access private methods outside the class

// Static DataMembers and Functions of a class
// Every object-oriented programming (OOP) language supports the `static` keyword to fully leverage the principles of OOP. This keyword allows the definition of class-level methods and properties that can be accessed without creating an instance of the class.

// Importance of `static`
// In JavaScript, the static keyword is used to define static `methods` and `properties` in classes. Static methods and properties belong to the class itself, rather than to instances of the class. This can be very useful in various scenarios.
// 1.Shared Data:
// Static properties can hold data that is shared across all instances of the class rather then one instance.
// 2.Factory Methods:
// Static methods can be used as factory methods to create and return instances of the class.
// This helps in implementing design patterns like Singleton or Factory.

class Chocolate {
  // static property - common to all instances of this class
  static sharedToffee = "Eclair";
  constructor(choconame, student) {
    this.choconame = choconame;
    this.student = student;
  }
  giveChocolates() {
    console.log(
      `Give ${this.choconame} + ${Chocolate.sharedToffee} to ${this.student}`
    );
  }
  //   Static method
  static giveToffe() {
    // `this` here is referring to the class itself not the object
    console.log(`Give toffee ${this.sharedToffee} to all`);
  }
}

const c1 = new Chocolate("DairyMilk", "Siddhant");
const c2 = new Chocolate("Perk", "Jr.JavaScript");
c1.giveChocolates(); // Give DairyMilk + Eclair to Siddhant
c2.giveChocolates(); // Give Perk + Eclair to Jr.JavaScript
Chocolate.giveToffe(); // Give toffee Eclair to all

// Note: this keyword used in static method refers to the class itself
// Note: Static members take memory allocation only once
// Note: Static members are not stored in prototype and hence not available to the objects

// Static initialization block
// Static blocks contains statements to be evaluated during class initializaion
// it can be used to initialize static data members

class Work {
  static tool = "wrench";
  static weldIron = function () {
    console.log(`${this.tool} is ready to get welded`);
  };
  static {
    // this keyword in this block refers to the class itself
    console.log(`hELLO wORK hAs been dONe with ${this.tool}`);
  }
}
console.log(Work.tool); // wrench
Work.weldIron(); // wrench is ready to get welded

const w1 = new Work();
const w2 = new Work();

// As soon as this code runs the following gets printed only onetime
// hELLO wORK hAs been dONe with wrench

// Setters and Getters in JS objects
class Student {
  #name;
  #age;
  set setName(name) {
    this.#name = name;
  }
  set setAge(age) {
    this.#age = age;
  }
  get getName() {
    return this.#name;
  }
  get getAge() {
    return this.#age;
  }
}

const student = new Student();
student.setName = "Siddhant";
student.setAge = "19";
console.log(student.getName); // Siddhant
console.log(student.getAge); // 19
