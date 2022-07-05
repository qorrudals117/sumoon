var express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var routers = require('./routes/route');
const http = require('https')

setInterval(function(){
    http.get('https://qorrudals-seomunmarket.herokuapp.com/')
},60000)

app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');
app.set('layout extractScripts', true)

// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//css와 img의 파일 사용을 위한 경로 설정
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
app.use('/', routers);
const homes = require('./routes/route.js');
app.use('/', homes); //ues = 미들웨어 등록

module.exports = app;