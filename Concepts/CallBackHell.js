// Sometimes there are situations where you need to handle different function calls one after another or when one function is dependent on another function to be executed creating a series of chain functions
//Simply that means if You have  a function `funB()` That should only be executed after function `funA()` is successfully executed
// Such situations can arise normally in day-to-day programming
// To handle such situations we use callbacks
// Callbacks are better way of creating async code

const funA = (funAWork, callback) => {
  funAWork.done();
  callback();
};
const funB = (funBWork) => {
  console.log(`B Work done`);
};

funA(
  {
    done: () => {
      console.log(`A Work done`);
    },
  },
  funB
);

// output
// A Work done
// B Work done

// Dark Side of Callbacks
// Callbacks can lead to following adversaries listed below
// • CallBack Hell / Pyramid of Doom
// • Code Grows Horizontally not vertically
// • Creates UnReadable and UnMaintainable Code
// • Leads to Inversion Of Control (IOC)


A(`A Work`, () => {
  B(`B Work`, () => {
    C(`C Work`, () => {
      D(`D Work`, () => {
        E(`E Work`, () => {
          // Doom GoesOn 
        });
      });
    });
  });
});


// Note On Inversion Of Control/ Hollywood Principle
// which is a way of saying "Don't call us, we'll call you".
// Inversion of Control is a design principle in software development where the control of program flow is inverted.
// It is said to be a good coding standard
// When we give another function the power to execute another function we are creating the point of inversion of control, Now the parent function logic decides the child fxn (in this case the callback fxn) will be executed or not , it can do anything with that child/callback Fxn it can run it twice,thrice or does not execute it at all based on its written logic 
// Function A decides if Fun B will be execute or not ,Fun B will decide if Fun C will run or not and so on... 