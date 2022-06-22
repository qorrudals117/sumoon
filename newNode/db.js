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
function getAllMemos(callback){
    connection.query('SELECT * FROM memo ORDER BY id DESC',(err,rows,fields)=>{
        if(err) throw err;
        callback(rows)
    })
}
//리스트에 새로운 내용을 추가 하는 함수
function insertMemo (content,callback){
    connection.query(`INSERT INTO memo(content,created,updated) VALUES('${content}',NOW(),NOW())`,(err,result) =>{
        if(err) throw err;
        callback()
    })
}
//리스트중 id값이 일치하는 row만 불러오는 함수
function getMemoById(id,callback){
    connection.query(`SELECT * FROM memo WHERE id = ${id}`,(err,rows,fields)=>{
        if(err) throw err;
        callback(rows)
    })
}
//리스트를 수정하고싶을 때 id값이 일치하는 부분을 수정하는 함수
function updatetMemoById(id,content,callback){
    connection.query(`UPDATE memo SET CONTENT='${content}',updated = now() WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        callback()
    })
}
//리스트중 id값이 일치하는 부분을 삭제 하는 함수
function deleteMemoById(id,callback){
    connection.query(`DELETE FROM memo WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        callback()
    })
}
module.exports = {
    getAllMemos,insertMemo,getMemoById,deleteMemoById,updatetMemoById
}
