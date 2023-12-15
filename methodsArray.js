let numbersArray=[];
// console.log(Array.isArray(numbersArray))
// using array constructor 
let fruits =new Array("Apple","Oranges");
// console.log(fruits);
// using array literals
let mixedArray=[1,"string",{name:"rahul"}];
// how to delete array element
let nums=[1,2,3,4,5];
// delete nums[2];
// console.log(nums); 
// it will not modify array , it will simply remove element from that position 
// output =>[ 1, 2, <1 empty item>, 4, 5 ]
for(let ele of nums){
    console.log(ele);
}
// push,pop.sclice.splice
let string=fruits.toString();
console.log(string);
[1,2,3,4].forEach(function(item,index,array){
    console.log(`${item} is at index ${index} in ${array}`);
})


// searching in array 

// index search element and return index but include method search and return bool type 
let arra=[1,2,3,"false"];
console.log(arra.indexOf("false"));
console.log(arra.includes(2));

let userData=[
    {name1:"rahul"},
    {name2:"kumar"}
]
// it will return object
let userPresent=userData.find(function(item,index,array){
    // console.log(item,index,array);
    return userData.name1;
})
// console.log(userPresent);
console.log(userPresent);

