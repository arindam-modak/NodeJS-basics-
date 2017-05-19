var connect = require('connect');
var http = require('http');

var app = connect();

// this next transfers to next function in stack. without next only the doFirst will work not doSecond.
function doFirst(request, response, next) {
    console.log("hello ");
    next();
}

function doSecond(request, response, next) {
    console.log("adm");
    next();
}

function profile(request, response, next) {
    console.log("user requested profile");
    next();
}

app.use(doFirst);
app.use(doSecond);
// connect is used to jump to a path i.e. eg. www.home.com/profile
app.use('/profile',profile);

http.createServer(app).listen(8888);
console.log("server is running...");