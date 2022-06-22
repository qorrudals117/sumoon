const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    port: '3306',
    database : 'memos',
    dateStrings:'date'
})
//리스트 전체를 불러오는 함수
function getAllnoti(callback){
    connection.query('SELECT * FROM notice ORDER BY id DESC',(err,rows,fields)=>{
        if(err) throw err;
        callback(rows)
    })
}
//리스트에 새로운 내용을 추가 하는 함수
function insertnoti (content,content2,callback){
    connection.query(`INSERT INTO notice(content,name,created,title) VALUES('${content}','노원문화원',NOW(),'${content2}')`,(err,result) =>{
        if(err) throw err;
        callback()
    })
}
//리스트중 id값이 일치하는 row만 불러오는 함수
function getnotiById(id,callback){
    connection.query(`SELECT * FROM notice WHERE id = ${id}`,(err,rows,fields)=>{
        if(err) throw err;
        callback(rows)
    })
}
//리스트를 수정하고싶을 때 id값이 일치하는 부분을 수정하는 함수
function updatenotiById(id,content,content2,callback){
    connection.query(`UPDATE notice SET CONTENT='${content}',title='${content2}',created = now() WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        callback()
    })
}
//리스트중 id값이 일치하는 부분을 삭제 하는 함수
function deletenotiById(id,callback){
    connection.query(`DELETE FROM notice WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        callback()
    })
}
module.exports = {
    getAllnoti,insertnoti,getnotiById,deletenotiById,updatenotiById
}
