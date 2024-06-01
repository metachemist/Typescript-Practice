"use strict";
// console.log("I");
// console.log("eat");
// let j=0;
// for (let i=0; i<=1000000000; i++){
//     j=j+1;
// }
// console.log("icecream");
// console.log("I");
// setTimeout(() => {
//     console.log("eat"); //1000 is 1 second --> it runs asynchornously
// }, 0);
// setTimeout(() => {
//     console.log("icecream");
// }, 1000);
// console.log("I");
// setTimeout(() => {
//     console.log("eat");
//     setTimeout(() => {
//         console.log("icecream");
//     }, 1000);                                //1000 is 1 second --> it runs asynchornously
// }, 1000);
//ordering pizza
//callback function --> 
function orderPizza(prepareCB) {
    console.log("Placing order..........");
    setTimeout(() => {
        console.log("Order placed");
        prepareCB();
    }, 3000);
}
function preparePizza(deliverPizza) {
    console.log("Preparing pizza.........");
    setTimeout(() => {
        console.log("Pizza is being prepared 🍕");
        deliverPizza();
    }, 3000);
}
function deliverPizza() {
    console.log("Delivering Pizza.........");
    setTimeout(() => {
        console.log("Your Pizza is at your door steps 🍕");
    }, 3000);
}
orderPizza(preparePizza);
