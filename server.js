var http=require("http");
var fs=require("fs")
var PORT=8000;

var server=http.createServer(handleRequest);

function handleRequest(request,response){

  fs.readFile(__dirname + "index.html", function(err, data) {

    response.writeHead(200,{"Content-Type":"text/html"});
    response.end();

    })

}
server.listen(PORT,function(){
  console.log("Server listening on PORT")
});



