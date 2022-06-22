var http = require('http');
var fs =require('fs');

var port = 3000;


var server = http.createServer(function(req, res){
    if(req.method == "GET"){
    fs.readFile('./login_get.html', function(error, data) {
        res.writeHead(200, { 'content-Type' : 'text/html ; charset= utf-8'})
        // res.writ("서버 시작 했습니다.");
        res.end(data);
    })
        } else if (req.method == "POST") {
            req.on('data', function (chunk){
                console.log(chunk.toString());
                var data = new URLSearchParams(chunk.toString());
                res.writeHead(200, { 'content-Type' : 'text/html ; charset= utf-8' });
                res.end('id :  ' + data.id + 'pw : ' + data.pw);
            })
        }
});
server.listen(port,function (){
    console.log("서버시작");
})