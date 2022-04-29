const http = require('http');
const server = http.createServer();

//웹서버 제작

const port = 3000
//포트번호 원하는 번호로 지정

server.listen(port, function () {
    console.log('웹서버가 시작되었습니다.');
});
server.on('connection', function() {
    console.log('사용자가 접속했습니다.');
})
server.on('request', function (req,res){
    console.log("클라이언트 요청이 들어왔습니다");
    res.writeHead(200,{"Content-Type": "text/html; charset=utf8"});
    res.write('<!DOCTYPEhtml>');
    res.write("<html>");
    res.write('<head>');
    res.write('<title>응답</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>node</h1>')
    res.write('<p>node 응답 메세지 </p>');
    res.write('</body>');
    res.write("</html>");
    res.end();
})
server.on('close', function(){
    console.log("서버가 종료되었습니다.");
})