const accountId = 122334
let accountEmail = "RaoWaqar@gmail.com"
var accountPassward = "12345"
accountCity = "Bahawalnagar"
let accountState;

// accountId = 2; not Allowed

/* prefer not to use var
  because of issue in block scope and functional scope
*/
accountEmail = "Rao@Rao.com"
accountPassward = "21212121"
accountCity = "Bahawalpur"

console.log(accountId, accountEmail, accountCity, accountPassward);

console.table([accountId, accountEmail, accountPassward, accountCity, accountState]);