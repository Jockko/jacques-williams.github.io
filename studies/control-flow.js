/** CONTROL FLOW
 *  1. If 
 *If statements control the flow or how our code continues to run based on "if" a condition is met.
 */
var flavor =  "grape";
if(flavor === "grape"){
    console.log("Yo! The flavor is grape!")
} 
/**
 *  2. Else-if
 * The second part of the if chain. It's the alternative route that we create for our code to take based on if SEPARATE condition passes.
 */
flavor = "cherry";
if(flavor === "grape"){
    console.log("Yo! The flavor is still grape!")
}
else if(flavor === "cherry"){
    console.log("The flavor has changed to cherry." )
}
//you can have multiple else if chains
else if(flavor === 'pineapple'){
console.log("This flavor pineapple is rare")
}
/**
 *  3. Else
 * The end to the chain. 
 * In other words, if all "ELSE" fails, what do you want to be the essential stopping point of this control flow?
 */
else {
    console.log("This flavor is very rare!")
}
/**
 *  4. Switch Statements take in a variable/expression that is matched against each "case" we present.
 * In the case the flavor is brown, we can assume it's root beer.
*/
switch(flavor){
    case "green": {
        flavor = "Green Apple";
        console.log(flavor);
//* Switch statements also have a break in between each case statement
        break;
        };
    case "orange": {
        console.log("the flavor is Orange");
        break;
    }
//  Default Statements are the final default actions we want to end the flow of our code with. Similar to the else statement  
    default: {
        console.log("I want to try that mystery flavor");
    } 
}
/**
 * 
 */