function placeAnOrder(orderNumber) {
    console.log("customer order:", orderNumber);

    cookAndDeliverFood(function () {
        console.log("Delivered food order:", orderNumber);
    });

}

//simulate a 5 sec. operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 4000);

}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);