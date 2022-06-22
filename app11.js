const express = require('express')
const app = express()
const port = 3000

app.use( (req, res)=>{
    console.log(`미들웨어 실행`)
    // res.send('서버 보기')
var userAgent = req.header('User-Agent');
var userHost = req.header('Host');
var paName = req.query.name;
var paId = req.query.id;
var paPassward = req.query.passward;
var servers = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>서버에서 응답 받아 넣기</h1>
<h2>네트워크에서 확인하기</h2>
<div>userAgent :  ${userAgent}</div>
<div>userHost :  ${userHost}</div>
<div>paName :  ${paName}</div>
<div>paId :  ${paId}</div>
<div>paPassward :  ${paPassward}</div>
</body>
</html>
`

res.send(servers)
// res.writeHead('200', {'content-Type' : 'text/html; charset=utf-8'});
// res.write('<h1>서버에서 응답 받아 넣기</h1>')
// res.write('<h2>네트워크에서 확인하기</h2>')
// res.write('<div>userAgent : ' + userAgent + '</div>')
// res.write(`<div>userHost :  ${userHost}</div>`)
// res.write(`<div>paName :  ${paName}</div>`)
// res.write(`<div>paId :  ${paId}</div>`)
// res.write(`<div>paPassward :  ${paPassward}</div>`)
// res.end;



})

app.listen(port, () =>{
    console.log(`express 실행 ${port}`)
})
