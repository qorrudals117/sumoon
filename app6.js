const express = require('express')
const server = express()
const port = 3000

//html문서를 변수로 선언하여 출력하는 방법
const desc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>get으로 요청하여 보기</h1>
    <form method="get" action="./login">
        <label>ID :</label>
        <input type="text" name="id" placeholder="아이디 입력">
        <label>PW : </label>
        <input type="password" name="pw" placeholder="비밀번호 입력">
        <input type="submit" name="sub" value="확인">
    </form>
</body>
</html>
`


server.get('/', (req, res) => {
  res.send(desc)
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 