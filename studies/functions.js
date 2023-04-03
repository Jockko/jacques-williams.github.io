/** FUNCTIONS
 * 1. What are functions and how they are declared. How are they executed?
 * Functions are reusable blocks of code that we build under the assumption that it will be used, or "called" later on in our code
 * to perform a specific "function" or operation that we build out.
 * To build a function body, you must first type the word function, followed by paranthesis, followed by the body like so: 
 */

// function(){

// }

//this is the basic syntax of an ANONYMOUS function. Meaning this function is just a plain one with no specific name.
//how do we name them? like so:

function logName(name){
console.log(name);
}
/**
 * 2. What are the parameters?
 * Parameters are like placeholders for whatever agrument we pass in to the function once we use, or "call" it.
 * Notice in the given example, the word name is placed inside of the parenthesis. This name represents a string datatype because we know that words are represented as strings in javascript
 * You can also have several parameters within your function. However it is ideal to keep it between 2 and 3 for readability like so:
 */
function logNames(name1, name2, name3){
    console.log(name1,name2, name3);
    return name1 + " " + name2 + " " + name3;
}

/**
 *  3. Syntax of a named function
 * Again, the syntax of a named function must always be the word function first, the name you want to name it, followed by its parameters
 */
function namedFunction(array){
    return array.slice(1);
}
/**
 *  4. How do we assign a function to a variable?
 * We can assign functions to variables also! These are called function expressions!
 */
let varFunc = function(number){
return number * 2;
}
/**
 *  5. How do we specify inputs and outputs in a function?
 * We specify the inputs and outputs at call time by calling the function when its time to be used.
 * At call time is when we pass the arguments into the function's placeholder parameters. Like so:
 */
 varFunc(2); //returns 4
 logNames("Jacques", "Anthony", "Williams"); //logs Jacques Anthony Williams
 namedFunction([1,2,3,4]) //returns a copied array version of [2,3,4]

/**
 *  6. What is scope?
 * Scope is like the layer, or zone that a specific block of code is encapsulated inside of. The global scope window is the entire page, whereas functions maintain their own scope.
 * Scope is important to understand when building code because it helps you determine whether you'll be able to access a specific variable based on its placement.
 * For example, functions have their own local scope, but can access variables from the outer scope right above it. Like so:
 */
var number = 6;
function accessGlobal(num){
    //here we created a local scoped "number" variable within the function
    var number = 9;
    if(number === 9){
        console.log(true);
    }
    else console.log(false);
}
accessGlobal(number) //logs false to the console because we are accessing the global number variable.
/**
 *  7. What is closure?
 * Closure is when the inner scope of a function is accessing an outer scoped variable. Thus creating a "closure" in our code.
 */
function accessOuter(){
    //here we created a local scoped "number" variable within the function
    var num = 6;
    return function add(){
    //creating a local variable
        var number = 9;
    //accessing the num parameter aka argument
        return number + num
}
}
//calling the number on accessOuter forces the function to access the num variable created outside of its scope.
accessOuter(number) //15