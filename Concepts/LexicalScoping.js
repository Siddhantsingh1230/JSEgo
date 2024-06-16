// To understand Lexical Scoping first We should know about Scopes and it types in JS
// what is a Scope?
// -- In a layman terms Scope is a region where a particular variable or an identifier is accessible and can be used , beyond this region the variable or identifier is not accessible.
// Types Of Scopes
// • Block Scope - Scope Inside curly braces is  called a Block Scope
// • Function/Local Scope - Scope inside a function is a Functional Scope
// • Global Scope - Most widely accessible Scope , an identifier/variable which is not enclosed in a class,enum,function or any block is called Global Scope

// In JS Scope resolution is done through Lexical scoping
// Lexical scoping, also known as static scoping is used for scope resolution of any variable or identifier
// Let us understand Lexical Scoping using an example

let globalName = "Siddhant";

const getName = () => {
  let globalName = "JSDeveloper";
  console.log(globalName);
};
getName(); // JSDeveloper

// How Lexical Scoping works is whenever any variable is accessed or referenced, JS Engine first tries to resolve the variable/identifier in the current scope ,if the variable is not available in the current scope then it tries to finds it in the immediate parent scope and again if the variable is not present in  that scope it will search in its parent scope and this goes on and on untill it finds the identifier/variable
// So My one word for remembering lexical scoping is inside-out Scope resolution
// Which means First check inside scope then check outside scope

let globalName2 = "Siddhant";

const getName2 = () => {
  // this scope doesn't have the globalName2 so it will go to its parent scope to resolve the identifier
  console.log(globalName2);
};
getName2(); // Siddhant
