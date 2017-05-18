var printB = function() {
    console.log("bacon is healthy");
};
printB();

// waits for sometime then calls function. here delay is 3 sec.
setTimeout(printB, 3000);

function add(a,b) {
    return a+b;
};

console.log(add(5,6));