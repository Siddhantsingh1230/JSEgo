// Generators in JS are special type of functions whose executions can be paused and resumed on will , unlike In the case of normal functions where if the fx is executed the "program controll" is inside the fx untill its completely executed but in generators the "program controll" can move back and forth between program and the generator.

// syntax:
function * myGen (){
    yield 1;
    yield 2;
    yield 3;
} 

const gen = myGen(); // gen contains the generator object

// console.log(gen.next()) // { value: 1, done: false }
// console.log(gen.next()) // { value: 2, done: false }
// console.log(gen.next()) // { value: 3, done: false }
// console.log(gen.next()) // { value: undefined, done: true }

// Real Life UseCase : Geneartors can be used to create new Id every time it is called


function * generateID(){
    let id = 0;
    while(true){
        yield id++;
    }
}

const idGen =  generateID();
// console.log(idGen.next()); //{ value: 0, done: false }
// console.log(idGen.next()); //{ value: 1, done: false }
// console.log(idGen.next()); //{ value: 2, done: false }
// console.log(idGen.next()); //{ value: 3, done: false }



// Tricky Generator Question
//  1 Generator with return keyword

function * reGen(){
    yield 1;
    return 0;
    yield 2;
}

const retGen = reGen();
console.log(retGen.next()); //{ value: 1, done: false }
console.log(retGen.next()); //{ value: 0, done: true }
console.log(retGen.next()); //{ value: undefined, done: true }
console.log(retGen.next()); //{ value: undefined, done: true }