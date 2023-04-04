'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
/**
 * identity: Designed to return the input value unchanged
 * @param: {value} could be anything
 */
function identity(value){
 //returns value changed
    return value;
};

/**
 * typeOf: Designed to return the datatype of a value logged to the screen as a string
 * @param: {value}
 * @return: {string}
 */
function typeOf(value){
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

/**
 * first: Designed to return the first amount of elements in an array
 * @param: {array, number}
 * @return: {value}
 */
function first(array, number){
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
    
    }
    }
    /**
     * last: Designed to return the last amount of elements in an array
     * @param: {array} 
     * @param: {number} 
     * @returns:{value}
     */

function last(array, number){
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

/**
 * indexOf: Designed to return the index position of a value
 * @param {*} array 
 * @param {*} value 
 * @returns: {value} 
 */

function indexOf(array, value){
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
}

/**
 * contains: Designed to return a boolean whether an array contains a specific value
 * @param {*} array 
 * @param {*} value 
 * @returns: {boolean}
 */

function contains(array, value){
    return array.includes(value) ? true : false;
}

/**
 * each: Designed to perform an action/function on each element inside a given collection
 * @param {*} collection 
 * @param {*} func 
 */

function each(collection, func){
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

/**
 * unique: Designed to return an array of unique values, not including any duplicates
 * @param {*} array 
 * @returns{*} new array 
 */
function unique(array){
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

/**
 * filter: Designed to return a new array of filtered values based on whatever test function we use.
 * @param {*} array 
 * @param {*} func 
 * @returns {*} new array
 */
function filter(array, func){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
          if(func(array[i], i, array)){
            newArr.push(array[i]);
               }
        }
 
    return newArr;
}
/**
 * reject: Designed to return a list of all values that didn't pass the test
 * @param {*} array 
 * @param {*} func 
 * @returns new array
 */
 function reject(array, func){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
    };
/**
 * partition: Designed to return an array of two sub arrays: one representing all values that passed the test, the other holding all values that failed.
 * @param {*} array 
 * @param {*} func 
 * @returns new array with two sub arrays
 */
function partition(array, func){
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

/**
 *  map: Designed to perform a callback test function on every element inside a collection and return the ones that passed
 * @param {*} collection 
 * @param {*} func 
 * @returns new array
 */

function map(collection, func){
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

/**
 * pluck: Designed to return the objects values at every key inside a new array
 * @param {*} objects 
 * @param {*} prop 
 * @returns value
 */
function pluck(objects, prop){
    //return an array containing the value of prop for every element in array
    //result must have the values of prop inside of the objects
   return _.map(objects, function(object){
    for(let key in object){
        return object[key];
    }
    });
}
/**
 * every: Designed to return boolean if everything passed in a collection or not
 * @param {*} collection 
 * @param {*} func 
 * @returns boolean
 */
function every(collection, func){
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
/**
 * some: Designed to return a boolean if some elements passed and not the whole
 * @param {*} collection 
 * @param {*} func 
 * @returns boolean
 */
function some(collection, func){
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

    /**
     * reduce: Designed to take in a seed aka accumulator and a test function that acts on each element in the array and ultimately reduces itself to either the seed, or the default seed (first value in array) should seed not be given
     * @param {*} array 
     * @param {*} func 
     * @param {*} seed 
     * @returns seed
     */
function reduce(array, func, seed){
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

/**
 * extend: Designed to extend every value inside one or more objects into an entirely new object
 * @param {*} obj1 
 * @param {*} obj2 
 * @param  {...any} objects 
 * @returns new object
 */
    function extend(obj1, obj2, ...objects){
            //Object.assign actually adds the properties of an object to the first argument you give it. aka another object
           return Object.assign(obj1, obj2, ...objects)
        }
module.exports.each = each;