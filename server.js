var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hello world</h1> <ul><li>one</li><li>two</li><li>three</li></ul>');
});

server.listen(3000, 'localhost');