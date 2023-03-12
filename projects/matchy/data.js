/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an animal object
var animal = {};
//add a species to that object
animal.species = 'tiger';
//create a name for that species
animal['name'] = "Tony";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
//using bracket notation give noises it's first element
noises[0] = "roar";
noises.push("growl");
noises.unshift("scratch");
console.log(noises)
noises.push("they'rree great!");
console.log(noises.length);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
//add another noise to the noises array
animal.noises.push("Purr");


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You can access properties on an object through dot notation access or bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 * Bracket notation, array methods
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
//push the animal object inside our animals array
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals)
var poodle = {species: "dog", name: "Sasha", noises: ["bark", "Yelp", "whine", "sigh"]};
animals.push(poodle);
var parrot = {species: "bird", name: "Seabiscuit", noises: ["talk", "Neigh", "caw" ]};
animals.unshift(parrot);
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I choose an array because arrays are meant to list things
var friends = [];
//write a function called getRandom that takes our animals array and returns a random index
function getRandom(arr){
//console.log(animals)
return arr[Math.floor(Math.random())]
}
getRandom(animals)
//get a random animal and add its name to friends
console.log(getRandom(animals), "My DUCK")

var randomAnimal = getRandom(animals);
console.log(randomAnimal, "Bingo!");

console.log(randomAnimal,3)
//add the randomAnimal's name to the friend's array
friends.push(randomAnimal.name);
//check out your friends
console.log(friends, '1');
//checking to see what position would be revealed at animals[randomAnimal];
//add friends array as a new property to our random animal
randomAnimal['friends'] = friends;
console.log(randomAnimal, "RANDOM BABY");

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}