const express = require('express')
const app = express()
const port = 3000

const qwer = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<h1>페이지 제작하기</h1>
		<h2>express를 이용하여 서버 실행 하기</h2>
		<ul>
			<li>express를 시작하는 방법은?</li>
			<li>변수를 선언하는 방법은?</li>
			<li>변수를 부르는 방법은?</li>
			<li>기본 퐅트를 객체에 속성으로 설정하는 방법은?</li>
			<li>서버를 시작하는 방법은?</li>
		</ul>
	</body>
	</html>
	`
app.get('/', (req, res) => {
	res.send(qwer)
  })

app.listen(port, () =>{
	console.log(`Example app listening on port${port}`)
})