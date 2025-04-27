// function structure:
function fun() {
    console.log("Hello, I'm a function!");
}
fun();

// Types of Functions:

// 1. Function Declaration
function funDeclaration() {
    console.log("I'm a Function Declaration...");
}
funDeclaration();

// 2.  Function Expression
const funExpression = function () {
    console.log("I'm a Function Expression...");
}
funExpression();

// 3. Arrow function
const funArrow = () => {
    console.log("I'm a Arrow Function...");
}
funArrow();

// another example
const funArrowName = (name) => "Hi, " + name;
console.log(funArrowName("I'm a Arrow Version Function..."));

// 4. Anonymous Function
setTimeout(function () {
    console.log("Time's Up!");
}, 2000);

// 5. IIFE - Immidietly Invoked Function Expression
(function () {
    console.log("I'm IIFE Function.. & I run myself....");
})();

// 6. Scope Function (Lexical Scope):

function outer() {

    let baharWala = "Mein bahar wala hu.. - Lexical Scope Example.";

    function inner() {
        console.log(baharWala);

    }

    inner();

}
outer();

// Closure :

function outer() {

    let baharWala = "Mein bahar wala hu... Closure Example";

    function inner() {
        console.log(baharWala);
    }
    
    return inner;

}
const functionKoBulao = outer();
functionKoBulao();