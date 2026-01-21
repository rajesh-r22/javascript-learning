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
// in this example settimeout for sec is for 2sec and 1sec for third, as we call the promise, 
// code execution goes like-> first, third , second
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
// .then(step2)
// .then(step3)
// .then(()=>console.log("All steps completed !"))

// this is more cleaner then call back hell

// -> ERROR-HANDLING <-

// Promise.resolve("success")
// .then(()=>console.log("wow success!"))
// .catch((err)=>{console.log("error"+err)})
// .then(()=>console.log("wow , 
// success after err"))

// Promise.reject("error!")
// .then(()=> console.log("success"))
// .catch(err=> console.log("Caught:",err))
// .then(()=>console.log("continue after error"))

// Promise.all

// const p1 = Promise.resolve("One");
// const p2 = Promise.resolve("Two");
// const p3 = Promise.resolve("Three");

// Promise.all([p1, p2, p3]).then(values => console.log(values));


// 👉 Output: [ "One", "Two", "Three" ]

//    Interview Quick Notes
// - Callback Hell → solved by Promises.
// - Microtask vs Macrotask → Promises (microtask) run before setTimeout (macrotask).
// - Promise.all → waits for all, fails if one fails.
// - Promise.race → first settled wins.
// - Error handling → always use .catch.

// -> Async- Await <-

// async/await is the syntactic sugar build on top of promises.
// async keyword -> marks a function that always return a promise
// await  keyword -> pauses the execution until the promise resolve

// function fetchData(){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             console.log("Data loaded !");
//             resolve()
//         }, 2000);
//     })
// }

// async function getData( ) {
//     console.log("loading....");
//     const response=await fetchData();
//     setTimeout(() => {
//         console.log("work done..");
//     }, 1000);
// }
// getData();
// console.log("wait..");


// NOTE : without wraping in promise , settimeout function will be like call back ki tarha hi kaam karega

// function printUserDetails(){
//     setTimeout(() => {           // ❌ Ye sirf callback hai
//         console.log("name:Rajesh...");
//     }, 2000);
//     // ❌ Promise return NHI kiya! undefined return hoga
// }
// async function getData(){
//     console.log("fetching data...");
    
//     const response= await printUserDetails();// undefined await kar rahe ho
// }
// getData();

// 1. "fetching data..." print ✅ (turant)
// 2. printUserDetails() call → setTimeout schedule ho gaya (2s baad chalega)
// 3. undefined return → await turant complete 
// 4. Function khatam (koi wait nahi hua!)
// 5. 2s baad → "name:Rajesh..." print



// async/await ke liye promise chahiye raheta tabhi await wait karega resove hone tak ka aur execution pause karega

// function printUserDetails(){
//     return new Promise(resolve=>{ 
//         setTimeout(() => {
//             console.log("name:Rajesh, role: Software Engineer");
//             resolve()
//         }, 2000);
//     });
// }

// async function getData(){
//     console.log("fetching data...");
//     const response= await printUserDetails();
//     console.log("fetching complete !");
// }
// getData();


// getData() call → 
// 1. "fetching data..." print ✅ (turant, sync)
// 2. printUserDetails() → Promise return (pending) 
// 3. await → function **pause** ho jata 😴
// 4. 2s baad → "name:Rajesh..." print + resolve() ✅
// 5. Promise resolve → await complete → **resume**
// 6. "fetching complete !" print ✅

// async/await = Promise ka dost 
// setTimeout = Callback ka dost
// Promise banao → phir await karo 

// yeh uper ke sare cases resolve ke the , if promise reject hua nd humne ,async/await use kare hai toh humko ,
// error aaye ga aur await wai hi karta rahe jayeg,

// error handling karna important hai async/await meee nhi toh await ke baad ka code  chalega hi nhi
// javascript


// function printUserDetails(){
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             console.log("name:Rajesh, role: non-IT");
//             reject("Error: User not found!");  // ❌ Reject kiya
//         }, 2000);
//     });
// }
// async function getData(){
//     try {
//         console.log("fetching data...");
//         const response = await printUserDetails();
//         console.log("fetching complete !");
//     } catch(error) {
//         console.log(error+"rajesh non-it nhi jayegaaaaaa");  // ✅ Handle ho jayega
//     }
// }
// getData()

// Output:
// fetching data...
// name:Rajesh...
// Error mila: Error: User not found!

// async function getData(){
//     console.log("fetching data...");
//     const response = await printUserDetails();  // ❌ Yahan error aayega
//     console.log("fetching complete !");        // Ye kabhi chalega nahi
// }
 
// Output:
// fetching data...           (0s)
// name:Rajesh...             (2s baad)  
// Uncaught (in promise) Error: User not found!
// "fetching complete !" print nahi hoga!

// 2 Tarike Handle Karo:
// 1. Try-Catch (Recommended) ✅

// 2. .catch() use karo
// javascript
// getData().catch(error => {
//     console.log("Error:", error);
// });

// Golden Rule:
// text
// Promise.resolve() → await success 
// Promise.reject() → await ERROR THROW! 😱

// try/catch ya .catch() MUST lagao!
// Reject = Exception. Handle karna padega! 🚨


// Sequential vs Parallel (Visual)
// Sequential (Ek ke baad ek)
// javascript
// const user = await fetchUser();     // 2s
// const posts = await fetchPosts();   // +2s  
// const profile = await fetchProfile(); // +2s
// Total: 6 seconds 😴
// ✅ Parallel (Sab ek saath)
// javascript
// const [user, posts, profile] = await Promise.all([
//     fetchUser(),     // 2s
//     fetchPosts(),    // 2s  
//     fetchProfile()   // 2s
// ]);
// Total: 2 seconds only! 

// Real Life Example:
// text
// Race track mein 3 dost:
//  Sequential: Raj pehle daudega (2s) → Anil (2s) → Sunny (2s) = 6s
// ✅ Parallel: Sab 3 ek saath daudenge = 2s mein result!
// Code Demo:
// javascript
// 3 APIs - har ek 2s lagti hai
// async function parallelDemo() {
//     console.time("Parallel");
    
//     const [user, posts, comments] = await Promise.all([
//         fetchUser(),      // Start: 0s
//         fetchPosts(),     // Start: 0s  
//         fetchComments()   // Start: 0s
//     ]);
    
//     console.timeEnd("Parallel");  // 2s (fastest promise)
    
//     return { user, posts, comments };
// }

// Timeline:
// Time 0s:   Sab 3 promises START 
// Time 2s:   Sab 3 promises COMPLETE → Results mil gaye!

// Key Rules:
// 1. Promise.all([p1, p2, p3]) = Sab START ek saath
// 2. Wait karega = Sabse slow promise tak  
// 3. 1 fail = Total fail (Promise.all)
// 4. Sab success = Array of results same order mein
// Promise.all() = Teamwork! Sab apna kaam parallel chalao, ek saath finish karo! 🎯