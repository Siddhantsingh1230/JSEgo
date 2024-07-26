// Shallow copy and Deep Copy are two types of data copy techniques in Any Programming language

// Shallow Copy
// A shallow copy creates a new object, but it only copies the references of nested objects, not the nested objects themselves. This means that if you modify a nested object in the original object, the changes will be reflected in the shallow copy and vice versa.
// Example of Shallow Copy

let originalObj = {
  name: "Siddhant original",
};

// LET'S TRY TO ASSIGN THE EXISTING OBJECT TO THE NEW VARIABLE
let shallowRefObject = originalObj;
shallowRefObject.name = "Siddhant shallow ref";
console.log(originalObj.name); // Siddhant shallow ref

/* ignore: Used to redeclare the object to its original content */
originalObj = {
  name: "Siddhant original",
};
/* ignore */

// let's try another way to copy objects using object destructuring

let shallowCopyObj = { ...originalObj };
shallowCopyObj.name = "Siddhant shallow";
console.log(originalObj.name); // Siddhant original

//👆 here it seems like that somehow we have created a new object from the old ones but it's not actually true let's take another example t proove that

let newOriginalObject = {
  level1Obj: {
    level2: {
      name: "Siddhant original",
    },
  },
};
let newShallowObject = {
  ...newOriginalObject,
};
newShallowObject.level1Obj.level2.name = "Siddhant shallow";
console.log(newOriginalObject.level1Obj.level2.name); // Siddhant shallow
// conclusion: we can't entirely copy an object , by default shallow copy is done for deeper levels in JS

// Deep Copy
// A Deep copy creates an entirely new object and copies the object's content to the new object and unfortunately it's not possible in JS. JS does not implicitly creates the deep copy of an object

// there are ways though to achive the deep copy behaviour but it's not 100% efficient

// Deep Copy techniques
// 1.JSON.parse and JSON.stringify

let oriObject = {
  level1: {
    level2: {
      name: "Siddhant original",
    },
  },
};

const deepCopyObj = JSON.parse(JSON.stringify(oriObject));
deepCopyObj.level1.level2.name = "Siddhant deep";
console.log(oriObject.level1.level2.name); // Siddhant original

// this method works like charm but has it's not disadvantage for example what if any of the nested levels has a method or a function as a key

// let's try with an example

let oriObject2 = {
  level1: {
    level2: {
      name: () => {
        console.log("Siddhant original");
      },
    },
  },
};

const deepCopyObj2 = JSON.parse(JSON.stringify(oriObject2));
// deepCopyObj2.level1.level2.name(); // TypeError: deepCopyObj2.level1.level2.name is not a function
console.log(deepCopyObj2); // { level1: { level2: {} } }
// the methods get ommited by the JSON.stringify() and hence the technique is not usefull in all such scenarios

// 2. use external libraries called lodash
// install loadash library and write the following
import _ from "lodash";

let ogObj = {
  level1: {
    level2: {
      name: "Siddhant OG",
      sayHi() {
        console.log("Hello");
      },
    },
  },
};

const clonedObj = _.cloneDeep(ogObj);
clonedObj.level1.level2.name = "Siddhant cloned";
console.log(ogObj.level1.level2.name); // Siddhant OG
clonedObj.level1.level2.sayHi(); // hello


// Final Remarks :
// Shallow copy is easier but deep copy is complex and itterative process to achieve
// Shallow copy is faster than deep copy
// Deep Copy is memory intensive and shallow copy is memory-efficient
// Data integrity and independence is possible in Deep Copy but not shallow copy
