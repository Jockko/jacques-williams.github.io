/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, name){
//looks through the animals array and returns the animal's object
for(let i = 0; i < arr.length; i++){
    console.log(arr[i].name, name, "combo")
    //IF an animal with that name exists
    if(arr[i].name === name){
        return arr[i];
    }
}//return null outside of your for loop to avoid any mishaps
return null
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    //should check to see if there is an animal that has the same name and if so,
    console.log(replacement);
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            console.log("FOund It")
            animals[i] = replacement;
        }
    }
    //use the replacement to replace it

}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, name){
    //if the array contains an object that matches the name, 
    for(let i = 0; i < array.length; i++){
        if(array[i].name === name){
            //remove that object
            //the third position inside of splice 
          array.splice(array[i], 1);    
        }
     //array.push(deleted)
    }
  return;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
//checks to see if animal object has a name property length > 0
console.log(animal, 11);
if((animal.name.length > 0) && (animal.species.length > 0)){
console.log(555)
for(let i = 0; i < animals.length; i++){
    //check if it has a unique name also
    if(animals[i].name !== animal.name){
        //adds this animal to the animals array if all these conditions are met!
        animals.push(animal);
    }
    return
}
}
//checks to see if animal object has a species with a lenght > 0;
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
