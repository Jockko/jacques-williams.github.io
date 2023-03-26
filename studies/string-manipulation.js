/** String Manipulation
 * 
 * 0: In order to write normal "words" in code, the words must be surrounded by quotes. These quotes words are called "strings"
 *  Strings are a specific datatype that computers recognize as "real words" in a nutshell.
 *  In order to manipulate a string, you must keep in mind that strings are indexed ordered. Meaning, each letter inside of the string is placed at a numbered aka "indexed" position.
 *  
 * 1. To create a string, we wrap "" around our words. Like creating a quote!
 * */
  var myString = "string";
 //  Strings can vary in length based on however long you want it to be.
  var longString = "This is a long string";
 //  Each letter/symbol AND space inside of a string hold an indexed position all the way up until the last value
    console.log(longString[0], longString[5], longString[4]); //T, ,21
 /**
  * Keep in mind the indexed position count always starts from 0;
  * Strings also have a length property to them. Meaning, you can keep count of the length of the string 
  * based on how many characters that particular string contains.
  * The string's length is counted normally from the beginning; This time starting from 1 instead of 0 compared to counting the indexed position of a value/character.
  */
 console.log(longString.length); //21
//You can also access the last value of a string dynamically by using a combination of bracket notation and the .length property like so:
console.log(longString[longString.length -1]) //g
/**
 * 2. Datatype
 * Strings are considered simple datatypes. Simple/Primitive Datatypes such as strings and numbers only require a small amount of storage bits to run.
 * By them being simple datatypes, they can also be reassigned further down the line.
 * For example:
 */
longString = "Shorter string";
console.log(longString); //longString now reads "Shorter string";