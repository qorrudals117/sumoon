
const express = require('express')
const app = express()
const port = 3000

//두개의 미들웨어를 만들어서 첫번째 미들웨어에서 두번째로 넘겨주는 방식
app.get('/', (req, res, next) => {
    console.log('첫번째 미들웨어')
  req.myName = '백경민'
  next();//다음으로 넘겨주는 함수
})
app.get('/', (req, res, next) => {
    console.log('두번째 미들웨어')
  res.send(`<h1>첫번째 미들웨에서 받은 ${req.myName}으로 응답</h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})