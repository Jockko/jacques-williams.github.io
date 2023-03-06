// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //prints numbers from 1 - 100
    //for multiples of 3, print "Fizz"
    //for multiples of 5, print "Buzz"
    //numbers that are multiples of both, print "FizzBuzz"
    //create an iteration for the numbers 1 - 100
    for(var num = 1; num <= 100; num++){
        //if a number divided by 5 and 3 has no remainder
        if(num % 5 === 0 && num % 3 === 0){
            //print FizzBuzz
            console.log("FizzBuzz");
        }
        //if the number is divisible by 3 only
        else if(num % 3 === 0){
            //print Fizz
            console.log("Fizz");
        }
        //if the number is divisible by 5 only
        else if(num % 5 === 0){
            //print Buzz
            console.log("Buzz")
        }
        //
        else console.log(num)
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}