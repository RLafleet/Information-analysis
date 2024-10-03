var http = require("http");
var fs = require('fs');
var url = require('url');
http.createServer(function (request, response) {
   var pathname = url.parse(request.url).pathname;
   var hscore = 0;
   request.on('data', function (chunk) {
        hscore = JSON.parse(chunk).hs;
        fs.writeFile('data.txt', hscore, function(err){
         if(err)
            return;
        });
   });

   if(pathname == '/' || pathname ==''){
      pathname = '/index.html';
   }
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {
         response.writeHead(200, {'Content-Type': 'text/html'});
         response.write(data.toString());		
      }
      response.end();
   }); 
}).listen(8080);

console.log('Server running at localhost:8080/');