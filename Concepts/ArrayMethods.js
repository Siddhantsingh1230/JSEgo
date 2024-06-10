const array = [1, 2, 3, 4, 5, 6, 7];

// 1. forEach // used to itterate over array elements
// const forEachFx = (elem)=>{
//     console.log(elem)
// }
// array.forEach(forEachFx);
// // or
// array.forEach((x)=>{
//     console.log(x)
// });
// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// 2. map // (Same as forEach) used to itterate over array elements and transform it
// it returns transformed array
const mapFx = (x) => {
  return x;
};
// console.log(array.map(mapFx)) // [1,2,3,4,5,6,7]
// or
// console.log(
//   array.map((x) => {
//     return x * 2;
//   })
// );  // [2, 4, 6, 8, 10, 12, 14]

// 3. filter // used to filter over array elements
// it returns filtered array
const filterFx = (x) => {
  return x > 2;
};
// console.log(array.filter(filterFx)) // [ 3, 4, 5, 6, 7 ]
// or
// console.log(array.filter((x) => {
//     return x > 2;
//   })) 
//   // [ 3, 4, 5, 6, 7 ]

// 4. Reduce // used to itterate over array of elements and return a single value(not array) 
// Array.reduce takes 2 arguments
// 1st parameter is a function callback
// this fx has two arguments one accumulator and another is current element
// acc remains maintained throughout the itteration only current changes
// 2nd parameter is initial value  (it is optional to provide)
// this value is used to initialize the acc to given value, if not provided first value in array is used as default value of acc

// array.reduce((acc,curr)=>acc+=curr,0); sum 


// Array Slice and splice
// + slice breaks any array into 2 parts we pass a range in the parameters  first param is inclusive second is exclusive

// const arr = [0,1,2,3,4,5];
// arr.slice(1,4);  1,2,3

// empty slice returns whole array

// single param in slice returns whole array feom that index/position mentioned in param

// + Splice works different then slice it mutates the original array and replace it with given parameter
// + accepts max 3 params
// + 1st param is start point
// + 2nd is how many to delete(not the end position)
// from 3rd params we can paas any number of parameters that we want to replace
// + can contains any thing that is to be replaced with the mentioned positions in 1st and 2nd params may be a obj ,array or single value

// const arr2 = [0,1,2,3,4,5];
// ex : arr2.splice(1,3,"ok"); // returns removed items array, here it will return [1,2,3]
// console.log(arr2) // [0,"ok",4,5]

// arr2.splice(1,3,"ok",'hi'); // returns removed items array, here it will return [1,2,3]
// console.log(arr2) // [0,"ok",'hi',4,5]


// Split