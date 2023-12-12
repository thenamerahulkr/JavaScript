let marks_student1 = 80;
let marks_student2 = 100;
let marks_student3 = 70;
let marks_student4 = 80;
let marks_student5 = 90;

// create array
let heroes = ["rahul", "kumar", "kavya", "singh"]
let marks = [91, 92, 93, 94, 95]
console.log(marks)
console.log(heroes)
//  array length property array.lenght=>number of element in array
console.log(heroes.length)

// type of marks and heroes
console.log(typeof (heroes))
//   array is key value pair but key ke jagah index use krte hain
// if we try to print array which is not , then output will be undefined
// string in javaScript is immutable =>cannot be changed suppose str="rahul" if we try to change str[0]=y , not possible

// loops over array
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
}

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

//  for-of loop or for-in loop=>A for...of loop exits when the iterator has completed (the iterator's next() method returns an object containing done: true). You may also use control flow statements to change the normal control flow. break exits the loop and goes to the first statement after the loop body, while continue skips the rest of the statements of the current iteration and proceeds to the next iteration.
// syntax 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"                     



// Iterating over a string
const iterable = "boo";

for (const value of iterable) {
    console.log(value);
}
// "b"
// "o"
// "o"

let mark = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of mark) {
    sum = sum + val;
}
let ans = sum / mark.length;
console.log(`avg marks of students = ${ans}`);


//  question in video 
let items = [250, 645, 300, 900, 50]
for (let item of items) {
    item = item - (item / 10)
    console.log(`the discounted price of item = ${item}`)
}

let i = 0;
for (let item of items) {
    items[i] = items[i] - (item / 10)
    console.log(`the discounted price of item = ${item}`)
}



// methods of array in javaScript
// push(); add end me 
// pop(); remove from end se or return last element
// toString(); array to string ye ek new array return karta hai 


let foodItems = ["potato","apple","litchi","tomato"];
foodItems.push("chips","paneer");
console.log(foodItems);
// foodItems.push(5);

let deletedItem = foodItems.pop();
console.log(deletedItem);
console.log(foodItems);


console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);

// concat()=>join multiple arrays and return return new array

let marvelHeroes = ["thor","spiderman","ironamn"];
let dcHeroes = ["superman","batman"];
let concat = marvelHeroes.concat(dcHeroes);
console.log(concat);

// unshift and shift method =>add start to the array and delete and return from begining of array
marvelHeroes.unshift("rahul")
console.log(marvelHeroes);
let returned = marvelHeroes.shift();
console.log(returned);

//  slice and splice method in js=> retur piece of array slice new array return  syntax slice(start idx.end idx)
//  splice change the original array (add,remove , replace) =>syntax splice(start idx,delcount,newele)


let marvelHero = ["thor","spiderman","ironamn","dr","shaktiman"];
let ret  = marvelHero.slice(1,3);
console.log(ret)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

