// In JavaScript, the substr() and substring() functions both extract parts of a string, but they have different parameters:

const str = "JSDeveloper";

// substr()
// Returns a specified number of characters from a given string, starting at a specified index.
// substr is deprecated
// Syntax
//  `str.substr(start, len)`. The start index can be negative, but it wraps to the end of the string.

console.log(str.substr(1, 3));
// SDe
console.log(str.substr(-5, 5));
// loper

// substring()
// Returns a new string that contains the characters from a string, between two specified indices. The syntax is str.substring(start, end).
// The start index is clamped to 0 if it's negative
// works same as `slice()` but when then start index is greater then end index then indices are swapped which doesnot happens in case of `slice()` this is something unique about the `substring()`.
// Here indices are swapped means greater number will act as the end index and smaller number will act as a starting index

console.log(str.substring(0, 2));
// JS
console.log(str.substring(3));
// eveloper

// Start index greater then end index
console.log(str.substring(5, 2));
// at the time of execution it becomes `console.log(str.substring(2, 5));`
// Dev
