// for in loop

// for(let variable_name in object_name){
    // Statement
//     }
// print object key value
let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
	console.log(key, myObj[key]);
}

let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
	console.log(value);
}
