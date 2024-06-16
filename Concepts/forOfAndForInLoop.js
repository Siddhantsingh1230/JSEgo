// For Of and For In are two types of Loops interviewers try to twist you with, but don't worry this tutorial will clear all differences between them

// + for of loop is used to itterate over itterable objects such as arrays and strings
// Note: for of loop cannot be used with objects

let array = [1, 2, 3, 4, 5];
let string = "Siddhant";
let object = {
  dev: "JS",
  follow:"siddhantsingh1230"
};

for (const element of array) {
  console.log(element);
}
// output
// 1
// 2
// 3
// 4
// 5

for (const character of string) {
  console.log(character);
}
// output
// S
// i
// d
// d
// h
// a
// n
// t

// + for in loop is used mainly with objects , it is used to itterate over keys of an object
// unlike `for-of` loop  `for-in` loop can be used with itterable objects like arrays and strings
for (const key in object) {
    console.log(key);
}
// output
// dev
// follow

for (const key in object) {
    console.log(object[key]);
}
// output
// JS
// siddhantsingh1230

for (const index in array) {
   console.log(index);
}
// prints index of itterables
// output 
// 0
// 1
// 2
// 3
// 4

for (const index in array) {
    console.log(array[index]);
 }
// output
// 1
// 2
// 3
// 4
// 5