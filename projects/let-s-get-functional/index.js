// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");
const object = require('underbar/object');


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 * * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jacques-williams.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//console.log(array);
//new array will only contain values that pass the condition
//the condition is to count the males
return _.filter(array, function(object){
    if(object.gender === "male"){
        return object
    }
}).length;

};

var femaleCount = function(array){
    return _.reduce(array, function(count, currentObj){
        if(currentObj.gender === 'female'){
            count++
        }
        return count;
    }, 0)
}

var oldestCustomer = function(array){
    //find the oldest customer's name

    let custObj = _.reduce(array, function(prevObj, currentObj){
        if(prevObj.age < currentObj.age){
            prevObj = currentObj;
        }
        //console.log(prevObj.name)
       return prevObj
    })
    return custObj.name
}

var youngestCustomer = function(array){  
    let custObj = _.reduce(array, function(prevObj, currentObj){
        if(prevObj.age > currentObj.age){
            prevObj = currentObj;
        }
       return prevObj
    })
    return custObj.name
};

var averageBalance = function(array){
    let balance = _.reduce (array, function(accumulator, current) {
        let newCurrentBalance = '';
        // iterate through current balance 
        for (let i = 0; i < current.balance.length; i++) {
            // check if current string char isn't $ and isn't , 
            if (current.balance[i] !== '$' && current.balance[i] !== ',') {
                // if true add copy the current string char newCurrentBalance 
                newCurrentBalance += current.balance[i];
            }
        } // make newCurrentBalance a number 
        return accumulator += Number(newCurrentBalance)
    }, 0)
    // return the balance / the array length
    return balance / array.length
}

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(count, currentObj){
        if(currentObj.name[0].toUpperCase() === letter.toUpperCase()){
            count++;
        }
       return count
    }, 0)
}

var friendFirstLetterCount = function(array, customer, letter){
//Find how many friends of a given customer have names that start with a given letter
let person = _.filter(array, function(element){
    return element.name === customer;
  })[0];
  let friends = _.filter(person.friends, function(element){
      return element.name[0] === letter.toUpperCase() || element.name[0] === letter.toLowerCase; 
  });
  return friends.length;
}
var friendsCount = function(array, name){
let friendss = [];
_.each(array, function(customer){                   //array is customers.json. customer is array[i] element
    _.each(customer.friends, function(friend){      //customer.friends is array[i].friends array. friend is friend object
        if (friend.name === name){
            friendss.push(customer.name);
        }
    })
})
return friendss;
}

var topThreeTags = function(array){
    let output = [];
    let objTags = _.reduce(array, function(acc, current){
        for (let i = 0; i < current.tags.length; i++){
            if (acc.hasOwnProperty(current.tags[i])){
                acc[current.tags[i]]++;
            } else{
                acc[current.tags[i]] = 1;
            }
        }
        return acc;
    }, {});
    let keyTags = Object.entries(objTags); //array of tags and count
    keyTags.sort(function(a, b){
        return b[1] - a[1];
    });
    output.push(keyTags[0][0]);
    output.push(keyTags[1][0]);
    output.push(keyTags[2][0]);
    return output;
}

var genderCount = function(array){
    return _.reduce(array, function(acc, current){
        if (acc.hasOwnProperty(current.gender)){
            acc[current.gender]++;
        } else {
            acc[current.gender] = 1;
        }
        return acc;
    }, {})
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
