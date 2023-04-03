// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
    //takes 3 inputs: greeting, location and time. 
    //Concatanate these values together to form a viable sentence and 
    //log it to the console. Don't forget the spaces!
    console.log(greeting + " " + location + " " + time);

} 



// 2.
var contestants = function(array){
//console.log(array);
//will return the number of entries in our dogs array
return array.length;
}



// 3.
var filterSpecies = dogs.filter(function(object){
        console.log(object)
        if(object.species === "dog"){
            return object;
        }
    })
    console.log(filterSpecies)



// 4. 
var dogContestants = [...filterSpecies]



// 5. 
var dogsWithClasses = dogContestants.map(function(obj){
console.log(obj.weight)
//if the weight is greater than 0 and less than 10
if(obj.weight >= 0 && obj.weight <= 10){
    //assign the value "Red" to the object's class property
    obj.class = "Red";
}
//if their weight is between 11 and 20
else if(obj.weight >= 11 && obj.weight <= 20){
    //that class value will be "Yellow"
    obj.class = "Yellow"
}
//anything else above or equal to 21 is considered green
else if(obj.weight >= 21){
obj.class = "Green"
}
return obj
})


// 6.
var firstInClass = function(array, output = {}){
    //copy the contents of topDogs in dogData.js into one object recursively
if(array.length === 0){
    return output;
}
//array[0] represents an object
for(var key in array[0]){
output[key] = array[0][key];
}
return firstInClass(array.slice(1), output)
}



// 7.
var votes = dogs.reduce(function(accumulator, current){
accumulator += current.votes;
return accumulator;
}, 0)