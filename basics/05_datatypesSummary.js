/* 
7 types of Primitive datatype:
String,Number , Boolean, null, undefined , Symbol, BigInt 

Javascript is a dynamically typed language.

Reference ( Non-primitve datatype )
Array , Objects, Functions

*/
const score = 100
const scoreValue = 100.34
const isLoggedIn = false
let userEmail; // value is undefined when not assigned 
const outsideTemperature = null

const id = Symbol('123')
const anotherId = Symbol('123') // even though the symbols are same still they are different for both symbols.

console.log(id=== anotherId); //this will be false bcoz of the type symbol


const bigNumber = 3534773948273723442344n // here when you put n in the end of the number javascript takes it as bigInt

// Arrays are in box brackets []
const heros=["Shaktiman" ,"Doga", "Nagraj"];

//Objects are in curly braces ; store with variable or can be used without variable too.
let myObj = {
    name :"Susan",
    age : 19

};

//Functions
const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber)
console.log(typeof myFunction)
console.log(typeof outsideTemperature)  // typeof null is 'object'