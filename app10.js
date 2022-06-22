const express = require('express');
const app = express();
const port = 3000;

const homes = require('./routes/route.js');
app.use('/', homes); //ues = 미들웨어 등록

app.set('views', __dirname + "/views");
app.set('view engime', 'ejs')
app.engine('html', require('ejs').renderFile);



module.exports = app;