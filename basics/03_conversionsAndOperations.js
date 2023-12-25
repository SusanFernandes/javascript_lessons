let score = 33
console.log(score)
console.log(typeof score)
console.log(typeof(score))//can write it in both the ways
score ="33"
console.log(score)
console.log(typeof score)
console.log(typeof(score))

//type conversion of score from string to number
let valueInNumber = Number(score)  //converting score from string to number
console.log(score)

/*while comverting the type should start with capital letter like 
Number String Boolean etc
e.g: let name= 99
let convertInString= String(name)
//here the number stored in name gets converted to string and is stored in the variable convertInString

*/

let nameString="33abc"
console.log(typeof nameString)
let nameNumber = Number(nameString)
console.log(typeof nameNumber)
console.log(nameNumber)
// NaN = Not a Number since 33abc is not a number . NaN is also a type.

let aNull = null
console.log(aNull)
console.log(typeof aNull)
let numberNull = Number(aNull)
console.log(numberNull) // null value is 0 when convert in number

let valueUndefined= undefined
console.log(typeof valueUndefined)
let thisUndefined = Number(valueUndefined)
console.log(thisUndefined)

let boolValue = 1;
console.log(typeof boolValue)
let booleanValue = Boolean(boolValue)
console.log(booleanValue)

/*
 1 => true; 
 0=> false;
 "" = false ;
 "ValueInTheString"= true
*/