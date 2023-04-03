/** Datatypes
 * 1. Number
 * Numbers are simple datatypes that are read normally in our program. For example: 
 */
var number = 9;
console.log(number);
/**
 * 2. Strings
 * Strings are simple datatypes that are read as words. In order for the computer to recognize those words as values, they must be wrapped in quotation marks
 * Strings hold each character and space as its own value.
 * For example:
 */
var myName = "Jacques";
var fullName = "Jacques Williams";
var sentence = "It is a beautiful day outside";
console.log(sentence[2])

/**
 * 3. Boolean
 * Booleans are a representation of truthy or falsiness. Booleans are typically read straight up as either true, or false;
 */
if(myName === "Jacques"){
    console.log(true) //true is the boolean that we want to console.log if our result matches
}
else {
    console.log(false) //false is the opposite boolean we want to print if our result fails
}
/**
 * 4. Array
 * Arrays are datatypes that can hold a list of values. Each value holds it's own indexed position inside of it. The first element starts from zero and ends at the last value.
 * Since arrays are lists, arrays are able to be searched, or "iterated" through as well using for loops(check loops.js)
 * Arrays can store any range of datatypes as well.
 */
var myArray = [0, 1, "Two", "Three", [4], 5, {"six": 6}, true, null];
console.log(myArray[3], myArray[6], myArray[7]);
// Arrays also have a length property method that allows you to get the full length of the array.
console.log(myArray.length);
/**
 * 5. Object
 * Objects are another datatype capable of holding different datatypes. These objects are formatted in a sort of dictionary/telephone book type of syntax.
 * Objects do not hold indexed positions like their Array counterparts, but what they do contain are what are called key/value pairs;
 * Each "key" created inside of the object has a value assigned to it.
 */
var myObject = {"key1": 1, key2: "Two", "key3": [3], key4: function(name){console.log(name)}, "key5": null};
/**
 * Notice how each key name can be read just fine either as a string interpretation, or just flat out typing the name. Javascript understands it as a string naturally.
 * Each value assigned to the key can be any datatype, INCLUDING function definitions. 
/**
 * 6. Function
 * Functions are blocks of reusable code that perform specific "functions" to our code once defined to our liking.
 * Functions activate once they are called. When calling the function, if that function's definition contains parameter(s), we must pass the corresponding arguments outlined in the function instead to test if your function works.  
*/
function printFavColor(color){
    if(color == "blue"){
 //functions are defined by their return statements! If a function doesn't return anything, it's just a plain function. The function you build may work in the background, but you need to return something in order to get the results you REALLY want. 
 //Remember, functions are designed to create, alter, or even find things. So when you call that function, you expect it to return something back to you. Console.logs only print the result to the screen, not altering or returning a new result. 
        return "Yes! Blue is my favorite color!";
    }
    else {
        return "This ain't it dawg!";
    }
}
printFavColor("Blue") //logs "Yes! Blue is my favorite color!" because using loosely == allows lowercase blue to still be read as Blue

 /** When a function is attached to an object's key, that function, or method, can be invoked by calling the variable/keyname.
*/ 
//accessing the key4 function on myObject and passing the argument "Jacques" as the name. 
myObject.key4("Jacques")
/**
 * 7. Undefined
 * Simply means a variable name is not defined. AKA, it doesn't exist!
 */
console.log(calories); //calories is undefined because we never created a variable with that name 
/**
 * 8. null
 * Represents intentional absence of a value.
 */
console.log(null);
console.log(myArray[myArray.length - 1]);
/**
 * 9. NaN
 * Not a number that is recognized naturally.
 *In most cases means the number is too big
 */
console.log(NaN);
/**
 * 10. Infinity to -Infinity
 * Infinite amount of numbers. It is read as Infinity 
 */
console.log(Infinity, -Infinity);
/**
 * What is the difference between primitive and complex datatypes?
 * Primitive Datatypes are considered Simple Datatypes. Meaning, that they represent one value and don't require much storage input in order to be interpreted.
 */
var num = 1;
var string = "Hi, there";
var bool = true;
/**
 * Complex datatypes on the other hand, are capable of holding multiple values instead of one. This also means that they inherently require more storage space in order to be interpreted.
 */
var complex1 = myArray;
console.log(complex1);
var complex2 = myObject;
console.log(complex2);
/**
 * What is the difference between copy by value and copy by reference?
 * Notice Above that we created 2 variables, both pointing to separate complex datatypes.
 * By assigning our complex variables like so, we have inherently created copied versions of myArray and myObject
 * Creating copies of complex datatypes is considered to be copying by reference. We are simply referencing another complex datatype naming it "complex1" and "complex2". The thing about it though, is that since they point to a piece of complex data, the original version of that datatype also gets altered if you were to mess with the copied version. 
 * Simple Datatypes on the other hand, are copied by value. Meaning, since simple datatypes store a singular value, when copied, we aren't referencing anything, we are simply pointing to the same primitive value and are NOT messing with the original variable we copied.
 */
var number = num;
number += 1;
console.log(number, num);