// Create web server 
// Create a web server that listens on port 3000 and serves the content of the file comment.html. 
// If the file is not found, the server should respond with a 404 status code.

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    console.log('request ', req.url);

    var filePath = path.join(__dirname, 'comment.html');
    fs