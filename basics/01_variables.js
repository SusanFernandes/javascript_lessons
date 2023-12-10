const accountId = 12345
let accountEmail= "susanfernandes@gmail.com"
var accountPassword="1243"
accountCity = "Mumbai" //varaible can be declared without using var and let but don't use this anywhere.
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.table([accountId, accountEmail, accountPassword, accountCity]) // new way of output in a tabular format
let accountState;
console.log(accountState)// when you print something whose value is not declared then the  default value is undefined

/*
Prefer not to use var to declare variables because of issue in block scope and functional scope
*/