// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    //returns value changed
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if(Array.isArray(value)){
        return "array";
    }
    //if the value is === null
    else if(value === null){
        //return the actual string of null
        return "null";
    }
    else {
        //otherwise, since typeof by itself returns the string representation of the datatype, just return typeof
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
//if array is not an array
if(Array.isArray(array) === false){
    //return []
    return [];
}
else if(!number || isNaN(number)){
    return array[0];
}
else {
    //splice returns the starting index, and the stopping number aka delte count
    return array.splice(0, number);
    // for(let i = 0; i < array.length; i++){

    // }
}
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    if(Array.isArray(array) === false){
        //return []
        return [];
    }
    else if(isNaN(number)){
        //return the last element
        return array[array.length - 1];
    }
    else if(number > array.length) {
        //splice returns the starting index, and the stopping number aka delte count
        return array;
    }
   else { return array.splice(array.length - number, array.length - 1);}
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
//return the [index] of RRAY THAT IS THE FIRST OCCURENCE of value
//check to see if value exists in the array first
    //if the value doesn't exist return -1;
if(array.includes(value) === false){
    return -1;
}
//return the first index of value
else {
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            //stop the loop once we find the first;
            return i;
        }
    }
}
//return;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //return true IF array contains value
    //false otherwise
    //MUST USE TERNARY OPERATOR in your implementation.
    return array.includes(value) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//iterates through every value and calls the function on each value;
_.each = function(collection, func){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            //
            func(collection[i], i, collection)
        }
    }
    else {
        for(let key in collection){
            //perform func on each value
            func(collection[key], key, collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
//returns a new array of all elements from array 
let nonDuplicates = [];
for(let i = 0; i < array.length; i++){
    //check for non duplicates and push them inside duplicate array
    if(nonDuplicates.includes(array[i]) === false){
//push
nonDuplicates.push(array[i]);
    }
}
return nonDuplicates
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //call func for each element in array passing the arguments element, index, array.
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        //if the function called on each element is truthy
        //check to see which ones are true
        if(func(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
//call func
let newArr = [];
for(let i = 0; i < array.length; i++){
    if(!func(array[i], i, array)){
        newArr.push(array[i]);
    }
}
return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
var newArr = [[], []];
for(let i = 0; i < array.length; i++){
    if(func(array[i], i, array)){
        newArr[0].push(array[i]);
    }
    else if(!func(array[i], i, array)){
        newArr[1].push(array[i]);
    }
    
}
return newArr;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    //save the new result of the test to a new array
    let results = [];
    //call func on each element in collction
    //if collection is an array, test the element, index, collection
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            results.push(func(collection[i], i, collection));
        }
    
    }
    else {
        for(let key in collection){
            results.push(func(collection[key], key, collection));
        }
    }
    return results;
    //if object, test its value, its key, and collection
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(objects, prop){
    //return an array containing the value of prop for every element in array
    //result must have the values of prop inside of the objects
   return _.map(objects, function(object){
    for(let key in object){
        return object[key];
    }
    });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    //if that func parameter didnt get an element passed, result is based on truthy
    let allItemsPassed = true;
    if(func === undefined){
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){
                    allItemsPassed = false;
                }
            }
        }
        else {
            for(let key in collection){
                if(!collection[key]){
                    allItemsPassed = false;
                }
            }
        }
    }
       else { 
        if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(!func(collection[i], i, collection)){
                allItemsPassed = false;
            }
        }
    }
    

    else{
        for(let key in collection){
            if(!func(collection[key], key, collection)){
                allItemsPassed = false;
            }
            else func(collection[key], key, collection)
        }
    }
    }
return allItemsPassed;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
let passed = false;
if(func === undefined){
if(Array.isArray(collection)){
for(let i = 0; i < collection.length; i++){
    if(collection[i]){
        passed = true;
    }
}
}
else {
    for(let key in collection){
        if(collection[key]){
            passed = true;
        }
    }
}
}
else {
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
           if(func(collection[i], i, collection)){
            passed = true;
           } 
        }
    }
    else {
        for(let key in collection){
            if(func(collection[key], key, collection)){
                passed = true;
            }
        }
    }
}
return passed;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
//determine if seed is undefined
let result;
//if the seed doesnt exist
if(seed === undefined){
    //set seed to the first element
    result = array[0];
    for(let i = 1; i < array.length; i++){
        result = func(result, array[i], i, array)
    }
}
else{
    result = seed;
    for(let i = 0; i < array.length; i++){
        result = func(result, array[i], i, array);
    } 
}
return result;
//else seed is defined
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, obj2, ...objects){
    //Object.assign actually adds the properties of an object to the first argument you give it. aka another object
   return Object.assign(obj1, obj2, ...objects)
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
