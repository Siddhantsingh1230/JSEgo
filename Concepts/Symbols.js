// Symbols 
// Symbols are newly added primitive DataType
// Symbols are guaranteed to be `unique` once created

// Syntax
const s1 = Symbol(); // Don't use new keyword here
console.log(s1) // Symbol()
console.log(typeof s1) //symbol

const s2 = Symbol();
console.log(s1==s2) // false 
console.log(s1===s2) // false
// Symbol("foo") === Symbol("foo"); // false

// Another way of creating a Symbol by adding a key into the symbol constructor

const s3 = Symbol("S3Symbol");
console.log(s3) // Symbol(S3Symbol)

// `Symbol.for()` static method searches in the Global Symbol registry for the specified key, if the key is not found then a new Symbol gets created and registered with the key.
console.log(Symbol.for("S3Symbol")); // Symbol(S3Symbol)
console.log(Symbol.for("NewSymbol")); // Symbol(NewSymbol)

// `Symbol.keyFor()` static method searches in the Global Symbol registry for the specified symbol value and returns the corresponding key of that symbol, if the value is not found then a new Symbol gets created and registered with the key.
// Symbol.keyFor() will work only for those symbols created using `Symbol.for()` static method but not the `Symbol()` constructor

const s1f = Symbol.for()
const s2f = Symbol.for("S2SymbolUsingFor")
console.log(Symbol.keyFor(s1f)); // undefined
console.log(Symbol.keyFor(s2f)); // S2SymbolUsingFor
console.log(Symbol.keyFor(s1)); // undefined
console.log(Symbol.keyFor(s3)); // undefined