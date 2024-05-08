"use strict";
//--> splice
let array = ["Porsche", "Maclaren", "Dodge", "Ferrari", "juke"];
// --> index to be remove
// --> how many elements should be remove
// --> which element should be add
let remove = array.splice(2, 2, "Mercedes", "Lamborgirni");
console.log(array); // --> Splice method --> changes original array
// --> returns remove value
//console.log(remove)
