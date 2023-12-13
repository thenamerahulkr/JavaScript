// function myFunction(){
// console.log("welcome to apna college");
// }
// myFunction();
function myFunction(n) {
    console.log(n);
}
myFunction("i love js");

function sum(x,y){
    // local variable
    return x+y;
}
let ans = sum(1,2);
console.log(ans);



//  arrow function =>syntax const functionname = (para1,para2...)=>{
//     do some work
// }
const mul = (x,y)=>{
    return x*y;
}

function countVowels(str){
    let count =0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char=="o" || char==="u"){
            count++;
        }
    }
    return count;
}
const a = countVowels("rahul");
console.log(a);

//  arrow function 
const countVow = (str)=>{
    let count =0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char=="o" || char==="u"){
            count++;
        }
    }
    return count;
}
const b = countVowels("rahul");
console.log(b);


//  for each loop in array =>method hai 
let array = [1,2,3,4,5,6,7]
array.forEach(function myFunct(n)
{
    console.log(n);
}
);

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

// square of a number using for each loop
let square = [1,2,3,4,5]

// square.forEach(function squareValue(n){
//     console.log(n*n);
// });

function squareValue(num){
    console.log(num**3);
}
square.forEach(squareValue);


//  understanding map method in javaScript
// The map() method of Array instances creates a new array populated with the results
// of calling a provided function on every element in the calling array.


let nums = [1,2,3,4,"rahul"]

nums.map((val)=>{
    console.log(val);
})


/*A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you may also cause the other object to change too.

A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 
as those of the source object from which the copy was made. As a result, 
when you change either the source or the copy, you can be assured you're not causing the other object to change too. 

*/


// arrays filter method
// The filter() method of Array instances creates a shallow copy of a portion of a given array,
//  filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// array reduce method


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

