
//ordering pizza
//callback function --> 

// callback hell  

function orderPizza(preparePizza: any){
    console.log("Placing order..........");

    setTimeout(() => {
        console.log("Order placed");

        preparePizza();
    }, 3000);

    
}

function preparePizza(deliverPizza:any){
    console.log("Preparing pizza.........");

    setTimeout(() => {
        console.log("Pizza is being prepared 🍕")

        deliverPizza();
    }, 3000);
}


function deliverPizza(){
    console.log("Delivering Pizza.........");

    setTimeout(() => {
        console.log("Your Pizza is at your door steps 🍕")
    }, 3000);
}

orderPizza(preparePizza);

