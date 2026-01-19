// JavaScript Fundamentals
// JavaScript - A programming language used to make websites interactive (logic, behavior, data handling).

// Variables
// Variables are containers to store data.

// var: FUNCTION-SCOPED, unsafe to use, causes bugs. Allows re-declaring/reassigning.

// javascript
// var x = 10;
// var x = 20; // Allowed (problematic)
// let: BLOCK-SCOPED, safe to use. Can reassign, cannot re-dedeclare.

// javascript
// let num = 10;
// console.log(num); // 10
// num = 30;
// console.log(num); // 30
// let num = 10; //  SyntaxError
// const: BLOCK-SCOPED, cannot reassign (but objects/arrays can be mutated).

// javascript
// const PI = 3.14;
// PI = 3.14159; // ❌ TypeError
// Interview Q: What's the difference between var, let, and const?
// Ans: Scope + reassignment behavior (as above).

// Closures
// A function that remembers variables from its outer (lexical) environment, even after the outer function finishes.

// javascript
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     };
// }

//  Best practice: Store outer function in variable
// const counter = outer();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//  Direct call returns function only
// console.log(outer()); // [Function: inner]

//  Double call executes immediately
// console.log(outer()()); // 1
// Interview Q: Create a private counter using closure.

// javascript
// function createCounter() {
//     let count = 0;
//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         getCount: () => count
//     };
// }
// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.getCount()); // 1

// Key Differences:
// Execution Context: Created at runtime (when function runs)

// Lexical Environment: Created at definition time (when function written)

// Closures: Powerful because they enable private variables + stateful functions

// Revision Hack:

// text
// Execution Context = runtime box
// Lexical Environment = definition box + parent link  
// Closure = magic key that remembers the box even after it's closed

// Synchronous vs Asynchronous
// Sync: Code runs task-by-task. Next task waits for previous to complete.

// javascript
// console.log("A");
// console.log("B");
// console.log("C"); 
//  Output: A B C (line by line)

// Async: Code doesn't wait. Tasks scheduled to run later while program continues.

// javascript
// console.log("Start");
// setTimeout(() => console.log("Macrotask"), 0);
// Promise.resolve().then(() => console.log("Microtask"));
// console.log("End");

//  Output:
//  Start
//  End  
//  Microtask ✅ (microtasks first)
//  Macrotask ✅
// Priority Order:

// Call Stack empty?

// Microtask Queue empty?

// Macrotask Queue

// Interview Q: Why does setTimeout(fn, 0) not run immediately?
// Ans: Even with 0ms, it goes to macrotask queue (after microtasks + sync code).

// Event Loop Components
// JS is single-threaded but appears multi-threaded:

// text
// Call Stack → Sync code runs line-by-line
// Heap → Stores variables/objects
// Web APIs → Browser handles (setTimeout, fetch, DOM events)
// Microtask Queue → Promise.then(), queueMicrotask()
// Macrotask Queue → setTimeout(), setInterval()
// Event Loop → Traffic controller
// Execution Order:

// Run all synchronous code
// Empty microtask queue completely
// Run one macrotask
// Repeat

// Callbacks
// Callback: Function passed as argument, executed later.

// javascript
//  Callback function
// function greet(name) {
//     console.log("Hello " + name);
// }

//  Higher-order function  
// function sayHi(callback) {
//     setTimeout(() => {
//         callback("Rajesh Reddy");
//     }, 1000);
// }
// sayHi(greet); // Hello Rajesh Reddy (after 1s)
// Simple Example:

// javascript
// function user(goal) {
//     console.log("Hello Rajesh, future " + goal);
// }
// function processGoal(callback) {
//     callback("Software Engineer");
// }
// processGoal(user); // Hello Rajesh, future Software Engineer
// Interview Q: What's a higher-order function?
// Ans: Function that takes another function as argument OR returns a function.

// Callback Hell (Pyramid of Doom)
// Nested callbacks make code unreadable:

//  Step 1: simulate async task
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 done");
//     callback();
//   }, 1000);
// }

// Step 2
// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 done");
//     callback();
//   }, 1000);
// }

// Step 3
// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 done");
//     callback();
//   }, 1000);
// }
// step 4
// function step4(callback){
//     setTimeout(() => {
//         console.log("step 4 done");
//         callback();
//     }, 1000);
// }

//  Nested callbacks = Callback Hell
//  javascript
// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4(() => {
//                 console.log("All steps done!");
//             });
//         });
//     });
// });
// Problems:

// Hard to read/maintain

// Error handling nightmare

// Deep nesting = unmanageable

// Solutions: Promises + async/await flatten the structure.

// ---------------PROMISES------------------
 
// Promise: A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// A promise has 3 states:
// --Pending – initial
// --Fulfilled – resolved
// --Rejected – failed

//  Creating a promise:-
// const promise=new Promise((resolve,reject)=>{
//     const dataFetch=false;
//     if(dataFetch){
//         resolve("Data fetch, successfully done!")
//     }else{
//         reject("failed to fetch data,try again")
//     }
// });
//  Consuming a Promise
// promise.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("hello iam finally,i always runs if it is resolve() or reject(),hehe");
// })

// - .then() → runs on success
// - .catch() → runs on error
// - .finally() → runs always

// ->promise chaining <-

// let promiseChain=new Promise((resolve,reject)=>{
//     resolve();
// })
// promiseChain
// .then(()=>{console.log("first");})
// .then(()=>{console.log("second");})
// .then(()=>{console.log("third");})   

// op:-    first
//         second
//         third

// 👉 Each .then() passes its result to the next
// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => x * 2)
//   .then(x => console.log(x)); // 4

// promise as aysnchronous function does not wait to finish previous one, 
// in this example settimeout for sec is for 2sec and 1sec for third, as we call the promise, code execution goes like-> first, third , second
// as third .then() executes before second , 
// let promiseChain=new Promise((resolve,reject)=>{
//     resolve();
// })

// promiseChain
// .then(()=>{console.log("first");})
// .then(()=> {
//     setTimeout(() => {
//       console.log("second");  
//     }, 2000);
// })
// .then(()=>{
//     setTimeout(() => {
//       console.log("third");  
//     }, 1000);
// }) 
// output: first, third, second 


//  Callback Hell → Promise Version
// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("step1 completed");
//             resolve();
//         }, 1000);
//     })
// }
// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("step2 completed");
//             resolve();
//         }, 1000);
//     })
// }
// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("step3 completed");
//             resolve();
//         }, 1000);
//     })
// }

// step1()
// .then(step2())
// .then(step3())
// .then(()=>console.log("All steps completed !"))

// this is more cleaner then call back hell
