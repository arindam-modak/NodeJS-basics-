//file module
var fs = require('fs');
fs.writeFileSync("corn.txt","corn is good");
console.log(fs.readFileSync("corn.txt").toString());

//path module
var path = require('path');
var websiteIni = "Desktop//adm/index.html";
var websitefi = "Desktop/adm/about.html";
console.log(path.normalize(websiteIni));
console.log(path.dirname(websitefi));
console.log(path.basename(websitefi));
console.log(path.extname(websitefi));

//setInterval
setInterval (function() {
    console.log("HI");
}, 2000);

//__dirname __filename
console.log(__dirname);
console.log(__filename);