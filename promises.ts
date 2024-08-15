import { resolve } from "path";

function orderPizzaProm(){
     return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Order Placed");
resolve("");
        }, 3000);
     })
}

function preparePizza(){
}

orderPizzaProm()

.then(preparePizza)