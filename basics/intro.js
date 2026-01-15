//JAVASCRIPT - javascript is a programming language used to make websites interactive(logic,behavior, data handing)

// VARIABLES - variable is a container to store data.
// ex:- var , let , const
// var : var is  FUNCTION-SCOPE, and unsafe to use, causes bugs,reassigning /re-declaring property is dangerous .
// var x = 10;
// var x = 20; // allowed (problem)

// let :let is safe to use , it is BLOCK-SCOPE, can be reassign , but not re-declare
// let num= 10;
// console.log(num);
// num=30;
// console.log(num);
// let num=10 //gives compile time error

// const :const is also safe to use , BLOCK-SCOPED, but cannot reassign value

// closure: a function that remember TouchEvent, variables of outer function, even after outer function is over OR from its lexical environment
// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         return count;
//     }
// }
// //  best practice outer funtion ko variable me store karna , bqz wo outter ko yaad rakhega 
// const counter=outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // idr hum direct outer function ko call kareng etoh sirf inner function return hoyega !
// console.log(outer());

// // Agar hum direct outer function ko call kare do paren ()() ke sath toh first() inner return kare ga, second() inner fucntion ki value return kare ga aur hum ise print karware 
// console.log(outer()());

// - What’s the difference between execution context and lexical environment?
// 👉 Execution context is created at runtime (when function runs). Lexical environment is created at definition time (when function is written).
// - Why are closures powerful?
// 👉 They allow private variables and stateful functions.

// 🔥 Revision hack:
// - Execution Context = runtime box
// - Lexical Environment = definition box + parent link
// - Closure = magic key that remembers the box even after it’s closed

//  SYNCHRONOUS V/S ASYNCHRONOUS
// sync - code runs task by task, next task waits until the previous task complets its execution
//  console.log("A");
//  console.log("B");
//  console.log("C");
//A
//B
//C , here tasks are executing line by line

// async - code execution does not wait for previous one or any task , task can be sheduled to run later, while rest proge=ram continues
// if there is any async task in call stack , it shedules the callback in macro task queue, and the call backs while after the synchronius tast are complete , 
// then event loop selet tasks from micro/marco task CountQueuingStrategy, and 

// Web APIs (Browser Help)

// console.log("start");
// setTimeout(() => {
//     console.log("async(macro-task)");
// }, 1000);
// Promise.resolve().then(()=>console.log("micro-task"));

// priority ->  call Stack empty?
//                     ↓
//             Microtask Queue empty?
//                     ↓
//             Macrotask Queue
// MICRO TASKS call backs before MACRO TASKS
            
// console.log("end");
// output: Start, async(macro-task), micro-task, end 
// Things like:
// setTimeout
// fetch
// DOM events

// ❗ They are NOT JS
// Browser handles them.
// JS bolta hai: “Tu handle kar, mai aage badhta hoon”.


 




 
 



