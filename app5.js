const express = require('express')
//익스프레스 기본 모듈을 불러온느 것
const server = express()
//익스프레스 객체 생성
const port = 3000

server.get('/', (req, res) => {
  res.send('헬로 월드.')
  //res.write는 여러번 사용할 수 있지만 res.send는 한번만 사용이 가능하다.
  //res.send('헬로 월드 두번째.')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 