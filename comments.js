
// Create web server
var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!\n");
});
server.listen(8000);
console.log("Web server has started.\nPlease log on http://localhost:8000");
