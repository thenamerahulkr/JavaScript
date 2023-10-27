const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
// automatically
accountCity = "Jaipur"    
//  account state is undefined
let accountState; 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
// One Statement, Many Variables
let person = "John Doe", carName = "Volvo", price = 200;
// You cannot re-declare a variable declared with let or const.

// This will not work:

// let carName = "Volvo";
// let carName;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
Incorrect
// const PI;
// PI = 3.14159265359; give error const must be initilised when declaration
/**Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object */
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
// But you can NOT reassign the object:

Example
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR