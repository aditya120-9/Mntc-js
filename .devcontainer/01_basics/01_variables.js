const accountId= 1533
let accountEmail="aditya@google.com"
var accountPassword="123456"
accountCity="jaipur"
let accountState;

//accountId=20//Not allowed
console.log(accountId);
/*
prefer not to use var
because of issue of block scope and functional scope

*/

accountEmail="pratap123@google.com"
accountPassword="9999"
accountCity="Bengluru"

console.table([accountId , accountEmail ,accountPassword ,accountCity, accountState])
