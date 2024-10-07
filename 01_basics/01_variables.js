const accountID = 548631
let accountEmail = "nvnitesh01@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"  // (accountCity) this is also considered as variable but prefer not to use it without putting let before variable name
let accountState;     //  no value is defined here

// accountID = 2 // not allowed
/* prefer not to use var
because of issue in block scope and funcional scope */

accountEmail = "nvlogan01@gmail,com"
accountPassword = "54321"
accountCity = "Jaipur"

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])  // this is a other way to run multiple code lines //

