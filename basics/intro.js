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
function outer(){
    let count=0;
    return function inner(){
        count++;
        return count;
    }
}
// //  best practice outer funtion ko variable me store karna , bqz wo outter ko yaad rakhega 
// const counter=outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // idr hum direct outer function ko call kareng etoh sirf inner function return hoyega !
// console.log(outer());

// // Agar hum direct outer function ko call kare do paren ()() ke sath toh first() inner return kare ga, second() inner fucntion ki value return kare ga aur hum ise print karware 
// console.log(outer()());






 
 



