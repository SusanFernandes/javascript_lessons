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