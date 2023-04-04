
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  var string = ''
  for (var i = 1; i <= number; i++) {
    string += '#'
    console.log(string)
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(var num = 1; num <= 15; num++){
    //if a number divided by 5 and 3 has no remainder
    if(num % 5 === 0 && num % 3 === 0){
        //print FizzBuzz
        console.log("fizzbuzz");
    }
    //if the number is divisible by 3 only
    else if(num % 3 === 0){
        //print Fizz
        console.log("fizz");
    }
    //if the number is divisible by 5 only
    else if(num % 5 === 0){
        //print Buzz
        console.log("buzz")
    }
    //
    else console.log(num)
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  var even = ''
  var odd = ''
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      even += ' '
      odd += '#'
    } else {
      even += '#'
      odd += ' '
    }
  } 

  var array = []
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      array.push(even)
  } else {
    array.push(odd)
  } 
  } array.push('')
  console.log(array.join('\n'))
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
