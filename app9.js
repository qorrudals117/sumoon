const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    console.log('첫번째 미들웨어')
    res.redirect('https://newsstand.naver.com/?list=&pcode=079')
    //페이지를 url로 이동해줌
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})