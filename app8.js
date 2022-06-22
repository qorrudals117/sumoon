const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    console.log('첫번째 미들웨어')
  res.send({name : "백경민", age : 25, date : "0506", city : "서울"})
  //send 메소드를 사용하여 json의 형태로 데이터 전송
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
