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
   // let lengthCount = 0;
   
//    let hasBalance = _.filter(array, function(current){
//     if(current.balance){
//         return current;
//     }
//    });
//     return _.reduce(array, function(sum, currentObj){
//         sum += currentObj.balance
        
//     }, 0)/hasBalance.length;
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
let friends = _.filter(array, function(){
    if(customer.friends){
        for(let i = 0; i < customer.friends.length; i++){
            if(customer.friends[i].name[0].toUpperCase() === letter.toUpperCase()){
                return customer
            }
        }
    }
})
return friends.length;
}

var friendsCount;

var topThreeTags;

var genderCount;

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
