// Here We Will be exploring some most used Array methods
const numArray = [1, 2, 3, 4, 5, 6, 7];

// 1. forEach
// used to itterate over Array of elements
// it takes a function as a parameter
const forEachFx = (elem) => {
  console.log(elem);
};
numArray.forEach(forEachFx);
// or
numArray.forEach((x) => {
  console.log(x);
});
// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// 2. Map
// (Same as forEach) used to itterate over Array of elements and transform it
// it returns transformed Array based on the conditions
// it takes a function as a parameter
const mapFx = (x) => {
  return x;
};
console.log(numArray.map(mapFx)); // [1,2,3,4,5,6,7]
// or
console.log(
  numArray.map((x) => {
    return x * 2;
  })
);
// [2, 4, 6, 8, 10, 12, 14]

// Interview Question
console.log([1, "1", "2a", 3, 5].map(Number));
// transforms element type to Number
// [ 1, 1, NaN, 3, 5 ]

// 3. filter
// used to filter over Array of elements ie. only returns those elements that satisfy given conditions
// it returns filtered Array
const filterFx = (x) => {
  return x > 2;
};
console.log(numArray.filter(filterFx)); // [ 3, 4, 5, 6, 7 ]
// or
console.log(
  numArray.filter((x) => {
    return x > 2;
  })
);
[ 3, 4, 5, 6, 7 ]

// Interview Question
console.log([1, "1", undefined, 3, 5,NaN].filter(Boolean));
// returns only those elements whose Boolean(element) returns true
// for exam Boolean(undefined) = false , and hence is not returned in output
// [ 1, '1', 3, 5 ]

// 4. Reduce
// used to itterate over Array of elements and returns a single value(does not return an Array)
// Array.reduce takes 2 arguments.
// 1st parameter is a function callback
// this fx has two arguments one accumulator(acc) and another is current element
// accumulator remains maintained throughout the itteration only current variable changes
// 2nd parameter in reduce is a initial value  (it is optional to provide)
// this optional value is used to initialize the acc to given value / starting value, if not provided first value in Array is used as default value of acc and then itteration starts from 2nd element

// console.log(numArray.reduce((acc,curr)=>acc+=curr,0));
// 28
// returns a sum of elements present in a numArray

// Array Slice and splice
// + Slice breaks any Array into 2 parts
// we pass a range in the parameters,  first argument is inclusive and second is exclusive
// it doesnot mutate/modify original array
// zero/empty argument slice returns whole Array ie. if the range is not provided
// if single argument is provided then slice returns whole Array from that index/position
// example. In `array.slice(1,5)` index 1,2,3,4 is considered but 5 is not considered in the output

const arr = [0, 1, 2, 3, 4, 5];
console.log(arr.slice(1,4));  // [1,2,3]
// Does not mutates original array
console.log(arr);  // [0,1,2,3,4,5]
// No range provided
console.log(arr.slice());  // [0,1,2,3,4,5]
// one argument slice
console.log(arr.slice(3));  // [3,4,5]

// + Splice works different then slice it mutates the original Array and replaces the elements  with given values mentioned in arguments
// + accepts max 3 params
// + It does not take a range like slice
// + 1st param is the start point/index/position
// + 2nd param is how many elements from starting index/position we want to delete (It is not the end position/index like slice)
// + 3rd parameter is a rest parameter we can pass any number of parameters that we want to replace the elements with
// + can contain any thing that is to be replaced with the mentioned positions in 1st and 2nd params.It may be a obj ,Array or single value

let arr2 = [0, 1, 2, 3, 4, 5];
// ex : arr2.splice(1,3,"ok"); // removes items from the Array
console.log(arr2.splice(1,3,"ok")) // [ 1, 2, 3 ] // these are removed items
// here it will mutate the arr2 to => [0,"ok",4,5]
arr2 = [0, 1, 2, 3, 4, 5];
// console.log(arr2) // [0,"ok",4,5]

arr2.splice(1,3,"ok",'hi'); // returns removed items of the Array, here it will return [1,2,3] if consoled
console.log(arr2) // [0,"ok",'hi',4,5] // array got mutated

// Flat
// Array.flat() is used to flat any nested array
// takes one argument called depth
// this depth argument is used to instruct the flat() to flatten the array to specific depth only
// depth defaults to 1

let nestedArray = [1, 2, 3, [4, 5, 6], 7, 8];
console.log(nestedArray.flat()) // [1, 2, 3, 4, 5, 6, 7, 8]
nestedArray = [1,2,3,[4,5,6,[7,8]]];
console.log(nestedArray.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(nestedArray.flat()) // [1, 2, 3, 4, 5, 6, [7, 8]]
console.log(nestedArray.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8]

// Interview Question
// Q.Create a method or a function to flat any levels of an array and name it flatArray()
// Solution 
// This is my solution and i have used recursion to tackle this problem (it is not efficient though!) 

const flatArray = (array, result = []) => {
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      flatArray(elem, result);
    } else {
      result.push(elem);
    }
  });
  return result;
};

console.log(flatArray([1, 2, 3, [4, 5, 6,[7,8,[9,10]]], 11, 12]));
// [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]
