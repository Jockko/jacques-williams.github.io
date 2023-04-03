/** OPERATORS
 *  1. Assignment Operators
 * Assignment Operators are the types of "operators" we use to "assign" something in our code. Typically used to create variables.
 */
var myfirstName = "Jacques";
var myLastName = "Williams";
var wholeName = myfirstName + " " + myLastName;
console.log(wholeName);
/**
 *  2. Arithmetic Operators
 * Arithmetic Operators are the operators we use to assign arithmetic values to our variables. Meaning,
 * any time we want to perform an arithmetic operation, we use the operation followed by the equal sign..*/
wholeName += " II";
console.log(wholeName);
var count = 0;
count += 5;
count -= 2;
count *= 6;
count /= 2;
console.log(count);


/**
 *  3. Comparison Operators
 * Comparison Operators are the operators we use to compare two different things. Those things could be either string datatypes, or numbers.
 * Loosely Equals (==) "loosely" compares the value and the datatype. Meaning a string and a number could still resolve to truthy if they're the same.
 * Strictly Equals (===) "strictly" compares the value and the datatype. Meaning, both must be the exact same when being compared for truthiness.  
 */
var weather = 'sunny';
if(weather === 'sunny'){
    console.log("It's sunny out here!")
}
//Lets say we had two variables
var number = 9;
var strNum = number.toString();
//strNum = 9;
//if we used loosely equals to compare
if(number == strNum){
    console.log("They the same foo! However, one is a different datatype than the other.")
}
else if(number === strNum){
    console.log("THESE TWO ARE EXACTLY THE SAME!")
}
//uncomment strNum = 9 to fully test

/**
 *  4. Logical Operators
 * Logical operators are used to compare or translate logical thinking/thoughts.
 */
var color1 = "red";
var color2 = 'blue';
//&& checks for both conditions to be true before you define the rest of your statement
if(color1 === red && color2 === 'blue'){
    console.log("These two colors create purple.")
}
color1 = 'green';
if(color1 === "purple" || color1 === "green"){
    console.log("My mom's favorite colors");
}
/**
 *  5. Unary Operators
 *    Unary Operators perform on one operand or value. They include:
 * +x 
 * -x
 * ++
 * --
 */

//(+x) Unary Plus converts the value into a number
var y = "9";
var x = +y;
console.log(x)
//(-x) Unary Minus converts the value into a number also, but turns the number negative
var negative = -y;
console.log(negative);
//(++) The Increment Operator increments the value by one
var incr = 0;
incr++;
incr++;
console.log(incr);
//(--) The Decrement Operator decreases the value by one
incr--;
incr--;
console.log(incr);
/**
 *  5. Ternary Operator (condition ? true : false)
 * Operates on 3 operands. The first is a condition, followed by a question mark. The second is the
 * Operation that should take place if the condition passes, with the last operation being used to describe if it fails
 */
incr > 0 ? console.log("Yes") : console.log("No")