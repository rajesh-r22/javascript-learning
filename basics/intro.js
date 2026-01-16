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

// EVENT-LOOP(core of js)
// js is single threaded, runs one thing at a Time
//  components
//  Call-stack, heap memory, web Apis, call back queues, microtask queue , event loop

//  - Call Stack → where synchronous code runs line by line.
// - Event Loop → the traffic controller that checks if the stack is empty.
// - Microtask Queue (orange) → contains tasks like Promise.then, queueMicrotask.
// - Macrotask Queue (blue) → contains tasks like setTimeout, setInterval.
// - Execution Order:
// - Run all synchronous code in the stack.
// - Empty the microtask queue completely.
// - Then run one macrotask.
// - Repeat the cycle.

// console.log("Start");

// setTimeout(() => console.log("Macrotask"), 0);

// Promise.resolve().then(() => console.log("Microtask"));

// console.log("End");

// output order-   Start
//                 End
//                 Microtask
//                 Macrotask

// CALL-BACK function
// > call back function is a simple function that you pass as an argument to another function,
// and the another function calls it when its work is document

// // callback-function
// function greet(name){
//     console.log("helloo "+name);
// }

// // High order function
// function sayHiHello(callback){
//     setTimeout(() => {
//         callback("Rajesh Reddy");
//     }, 1000);
     
// }
// sayHiHello(greet);
// >callback ensures code runs async task completes.

// ex:simple
//  callback-function
// function user(goal){
//     console.log("Hello Rajesh future "+ goal);
// }
// higher order function
// function processGoal(callback){
//     callback("Software Engineer");
// }
//  calling HOF with argument as callback function
// processGoal(user);

// CallBack-Hell
// > nested callback makes code, hard to read and Maintain
// - Callback = function passed as argument, executed later.
// - Used in event handling, async tasks (setTimeout, API calls).
// - Problem: Callback Hell → solved by Promises.

// “Callback hell happens when multiple asynchronous tasks are nested inside each other, 
// making code unreadable. Promises and async/await solve this problem by flattening the structure.

//  function step1(callback){
//     setTimeout(() => {
//         console.log("step1 done");
//         callback();
//     }, 1000);
//  }
//  function step2(callback){
//     setTimeout(() => {
//         console.log("step2 done");
//         callback();
//     }, 1000);
//  }
//  function step3(callback){
//     setTimeout(() => {
//         console.log("step3 done");
//         callback();
//     }, 1000);
//  }
//  function step4(callback){
//     setTimeout(() => {
//         console.log("step4 done");
//         callback();
//     }, 1000);
//  }

//   “Pyramid of Doom”.
//  step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4(()=>{
//                 console.log("all steps done!");
                
//             })
//         })
//     })
//  })
 



