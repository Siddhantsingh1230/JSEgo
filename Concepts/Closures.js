// Closures
// In Real life When we talk about closures we talk about the emotional attachments to our relatives or closed ones or the memories of someone close

// Similarly in JavaScript The function maintains its parent scope by using Closures
// Closure = function + parent scope/lexical scope/surrounding scope
// Let's understand Closure by below example

function outter(){
    const outterVariable = "JSDeveloper";
    function inner(){
        console.log(outterVariable)
    }
    return inner;
}

// Above function is just not returning onlu inner function but is also returning the lexical environment of the inner Function

const closure = outter(); // after this line the `outterVariable` should not be available as its context would have been deleted but it doesn't happen so still inner function can access this `outterVariable`
closure() // JSDeveloper\


// Real Life Use Case of closure i do
// I use closures to generate unique Ids
 const generateID =()=>{
    let id= 0;
    return ()=>{
        return ++id;
    }
 }

 const generateUID = generateID();
 console.log(generateUID())
 console.log(generateUID())
 console.log(generateUID())
 console.log(generateUID())
 console.log(generateUID())
 
// output 
// 1
// 2
// 3
// 4
// 5