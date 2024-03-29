////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  var array = [];
  if (typeof step === 'undefined') {
    step = 1;
  } else if (typeof step === 'undefined' && start > end) {
    step = -1;
  }
  console.log(step)
  if (end > start && step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (start > end && step < 0) {
    for (let i = start; i >= end; i += step) {
      console.log(i)
      array.push(i);
    }
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
let output = [];
for(let i = array.length - 1; i >= 0; i--){
output.push(array[i])
}
return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  var arrayTemp = [];
  for (let i = 0; i < array.length; i++) {
    arrayTemp[i] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = arrayTemp[array.length - 1 - i];
  }
  return array
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--) {
    rest = { value: array[i], rest: rest };
  }

  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
  if (list.rest === null){
    output.push(list.value)
    return output;
  }
  output.push(list.value);
  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return { value, rest: list };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(array, n) {
  if (!array) {
    return undefined;
  }
  if (n == 0) {
    return array.value;
  }
  return nth(array.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
//determine if x and y are both objects
if(typeof x !== 'object' && typeof y !== "object" ){
return x === y
}
//determine if one OR the other is an object
if(typeof x !== 'object' || typeof y !== 'object'){
  return false;
}
//x and y are both complex pieces of data
let xKeys = Object.keys(x); //['a'];
let yKeys = Object.keys(y);//['a'];
if(xKeys.length !== yKeys.length){
return false;
}
//iterate over every value to make sure the keys match. Either array is fine to use. We just chose xKeys
for(let i = 0; i < xKeys.length; i++){
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
}

}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
