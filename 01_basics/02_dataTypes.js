"use strict"; // treat all JS code as newer version
/**JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date */
// alert( 3 + 3) // we are using nodejs, not browser, this will work on browser not on nodejs


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh");


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state=10; 
state=7;
console.log(state)

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
// When adding a number and a string, JavaScript will treat the number as a string.

let g = 16 + "Volvo";
console.log(g);  /* output will be"16Volvo" */
// JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let h = 16 + 4 + "Volvo";
console.log(h);/* output will be "20Volvo" */

let j = "Volvo" + 16 + 4;
console.log(j); /* output will be "Volvo164" */


// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
