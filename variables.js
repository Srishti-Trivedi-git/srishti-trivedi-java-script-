const accountId = 12345;
let accountEmail="user@example.com";
var accountPassword="password123";
var accountCity="New York";
// accountId = 54321;
// console.log("accountId");
/*
avoid using var because of its issues in scope and all.
*/
accountEmail = "newuser@example.com";
accountPassword = "newpassword456";
accountCity = "Los Angeles";
console.table([accountId, accountEmail, accountPassword, accountCity]);