// Call,Bind and Apply
// These are function related methods, which are used for sharing functions (function borrowing) and used for manipulating the `this` context , we'll see that in a minute

// 1.Bind
// Present in `Function.prototype.bind()`
// `bind` returns a function ,with first argument as refering to `this` keyword and takes a sequence of arguments .

const job1 = {
  role: "SDE",
  type: "Remote",
};
const job2 = {
  role: "JSDev",
  type: "Office",
};

function explainJob(location) {
  console.log(`${this.role} role in ${this.type} premises , ${location}`);
}

explainJobForJob1 = explainJob.bind(job1, "Brazil"); // we have changed the `this` context of explainJob finction to point to `job1` in this case
explainJobForJob2 = explainJob.bind(job2, "India"); // we have changed the `this` context of explainJob finction to point to `job2` in this case

explainJobForJob1();
// SDE role in Remote premises , Brazil
explainJobForJob2();
// JSDev role in Office premises , India

// 2.Call
// Present in `Function.prototype.call()`
// `call` executes the attached function with the given `this` context which is present in first argument followed by other arguments

explainJob.call(job1, "Africa");
// SDE role in Remote premises , Africa
explainJob.call(job2, "India");
// JSDev role in Office premises , India

// 3.Aplly
// Present in `Function.prototype.apply()`
// `apply` works similary to `call` it also executes the attached function with the given `this` context which is present in first argument followed by  an array of arguments (the arguments are passed little differently from call )

explainJob.apply(job1, ["New York"]);
// SDE role in Remote premises , New York
explainJob.apply(job2, ["India"]);
// JSDev role in Office premises , India


// Conclusion
// call,bind and apply are used for function borrowing and changing the `this` context of a function
// call and apply excecutes the function on go as soon as they are called, but bind returns a function with modified `this` context and can be executed at will