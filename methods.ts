//Array and their properties
let fruits: string[] = ["Apple", "Orange", "Mango", "Banana", "Pineapple"];
console.log(fruits);

console.log(fruits.pop());
fruits.push("grapes");
fruits.pop()        //push and pop are built-in functions
console.log(fruits)


//fruits.unshift("blueberry"); // add the element in the start of array


let sliceArray = fruits.slice(1);

console.log(sliceArray);

console.log(fruits.slice())
console.log(fruits);

//fruits.splice(2, 1)

console.log(fruits);    //splice changes original array

//to delete mango and banana
fruits.splice(1,1);
fruits.splice(2,1);
console.log(fruits);