// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); convert this string to number
// console.log("02" > 1); onvert this string to number
// ===	equal value and equal type 

// x === 5	true	
// x === "5"	false


// !==	not equal value or not equal type
// x=5;
// x !== 5	false	
// x !== "5"	true	
// x !== 8	true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);
// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
//  An empty string converts to 0. A non-numeric string converts to NaN which is always false.
// 2 < 12	true	
// 2 < "12"	true	
// 2 < "John"	false	
// 2 > "John"	false	
// 2 == "John"	false	
// "2" < "12"	false	
// "2" > "12"	true	
// "2" == "12"	false