/** LOOPS
 * 1. While, For, and For-in Loops 
 * Loops are used for lookup purposes. Meaning, if we were trying to analyze the contents within an array or a string,
 * we would need to use a loop in some way in order to do so. The for-loop is the most commonly used version of loops. The for loop
 * loops through an array and stops based on whatever stopping condition you give it. As it iterates, you are capable of targeting each independent value;
 */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop body syntax
// for(var i = 0; i < nums.length; i++){

// }
//while loop body syntax
// while(){
    
    // }
    
    /**
     *  2. Looping forward and backwards
    */
        for(var i = 1; i <= 50; i++){
            console.log(i)
        }
        var word = "Word"
        for(var i = word.length - 1; i >= 0; i--){
            console.log(word[i])
        }
/**
 *  3. Loop over an Array forwards and backwards
 * 
 *  */
var index = 0;
let myArray = ["I", "love", "Nicole", "oh", "so", 'much'];

function getNicole(array){
//this function should look through myArray and return the value "Nicole"
//look through the array
for(let i = 0; i < array.length; i++){
if(array[i] === "Nicole"){
 return array[i];
}
}
};

getNicole(myArray);

while(index < nums.length){
console.log(nums)
}
/**
 *  4. Loop over an object
 */
var person = {name: "Jacques", age: 28, haircut: "Dreads", favColor: "Blue"};
for(var key in person){
    //log every key/property to the console
    console.log(key);
    //log every value assigned to the property
    console.log(person[key])
    
}