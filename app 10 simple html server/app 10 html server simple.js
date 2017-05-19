var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response) {
    response.writeHead(404, {"Context-type": "text/plain"});
    response.write("error 404: page not found");
    response.end();
}

//handle a user request
function onRequest(request, response) {
    // '/' means home page
    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-type": "text/plain"});
        fs.createReadStream("./index.html").pipe(response);

    } else {
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log("server is running...");
