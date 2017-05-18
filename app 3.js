var adm = {
    printName: function() {
        console.log("My name is adm");
        console.log(this === adm);
    }

};
adm.printName();

//the default calling context is global
function doSomething() {
    console.log("\nhello");
    console.log(this === global);
};
doSomething();
