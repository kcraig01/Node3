
var http = require('http');

http.createServer(function (request, response) {

	var fs = require('fs');

	request.setEncoding('utf8');
	request.on('data', function(data){
		console.log(data);
		
	});
	// response.end(JSON.stringify({success: true}))

	var server = fs.readFile(__dirname+ '/index.html', function(err, data){

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(data)

});

})



.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


