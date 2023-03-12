//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
 //should take an object and return its values in an array
 let values = [];
 for(let key in object){
    values.push(object[key]);
 }
 //returns that array of object values
 return values;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//should take an object and return all its keys in a string
let keysArray = [];
for(let key in object){
    keysArray.push(key);
}
//once we've added all of the keys to the keyString after the loop finishes
//seperate each word by a space
console.log(keysArray.join(" "), "WASSAM HOMIE")
return keysArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //should return all of the object's string values combined into one new string
    //create a container meant to store all of our object's string values  
    let stringValues = [];
    //first we must check the object to see if any values are strings
    for(let key in object){
        if(typeof(object[key]) === "string"){
            //if its a string, add to your stringValues
            console.log("PROOF")
            stringValues.push(object[key]);
        }
    }
    //return those values joined by a space
    return stringValues.join(" ");
    //with each string separated by a space

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //this collection could either be an array or an object.
    //function should determine whether the collection is an array or object
    //should return "array" or "object"
    //check to see if collection is an array first since arrays are recognized as objects using typeof
    if(Array.isArray(collection)){
        return "array";
    }
    else if(typeof(collection) === "object"){
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //should take a string of one word and return the first letter of the string capitalized
    //input strings are immutable but for the sake of the function call, it will return an altered version of string
    console.log(string)
    string[0].toUpperCase();
    console.log(string[0].toUpperCase(), string.slice(1), "ZYOu")
    //let str = string.slice(0, 1).toUpperCase() + string.slice(1);
    return string.slice(0, 1).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create an array container for our new values
    let newArray = [];
    let strArray = string.split(' ');
 console.log(strArray);
 for(let i = 0; i < strArray.length; i++){
    //console.log(strArray, "HELO");
newArray.push(strArray[i][0].toUpperCase() + strArray[i].slice(1));
 }
 return newArray.join(' ');
 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//should take a object with a name property and if so print a welcome messsage inlclduing the name
if(object.name.length > 0){
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//returns the object's name and species if it exists
if(object.name.length > 0 && object.species.length > 0){
    //return said name and species
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);
}
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if object has a noises array and it isn't empty
    if(object.noises && object.noises.length > 0){
        //return them as a string separated by a space
        return object.noises.join(" ");
    }
    else //return a string saying there are no noises
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//if string has the word param
//break the string down into an array first
let splArr = string.split(' ');
console.log(splArr);
for(let i = 0; i < splArr.length; i++){
    //determine if splArr contains the word param
    if(splArr[i] === word){
    return true;
    }
}
//return true
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//should add the name to the object's friends array
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
console.log(object);
if(object.friends){
//assuming object has a friends array
//if name exists as a friend inside of the friends array located on the object
for(let i = 0; i < object.friends.length; i++){
    if(object.friends[i] === name){
        return true
    }
} 
    }
//return true
return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    console.log(array[0].friends, name);
    //return a list of all the names that name is NOT friends with
    //check the array
    let container = [];
    for(let i = 0; i < array.length; i++){
        console.log(array[i].friends)
        //if the friends property contains a friend that matches "name"
        if(Array.isArray(array[i].friends)){
            for(let j = 0; j < array[i].friends.length; j++){
                console.log("You dat nigga")
             if(array[i].friends[j] !== name){
                 container.push(array[i][j])
             }
            }

        }
    }
    return container
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}