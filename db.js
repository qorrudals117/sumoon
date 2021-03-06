const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'us-cdbr-east-05.cleardb.net',
    user     : 'b14570cd74f405',
    password : '97b325f3',
    port: '3306',
    database : 'heroku_321c6ccf89b4284',
    dateStrings:'date'
})
//리스트 전체를 불러오는 함수
function getAllnoti(callback){
    connection.query('SELECT * FROM seomun ORDER BY id DESC',(err,rows,fields)=>{
        if(err) throw err;
        callback(rows)
    })
}
//리스트에 새로운 내용을 추가 하는 함수
function insertnoti (title,content,callback){
    connection.query(`INSERT INTO seomun(title,content,createtime) VALUES('${title}','${content}',NOW())`,(err,result) =>{
        if(err) throw err;
        callback()
    })
}
//리스트중 id값이 일치하는 row만 불러오는 함수
function getnotiById(id,callback){
    connection.query(`SELECT * FROM seomun WHERE id = ${id}`,(err,rows,fields)=>{
        if(err) throw err;
        callback(rows)
    })
}
//리스트를 수정하고싶을 때 id값이 일치하는 부분을 수정하는 함수
function updatenotiById(id,title,content,callback){
    connection.query(`UPDATE seomun SET title='${title}', CONTENT='${content}',createtime = now() WHERE id=${id}`,(err,result)=>{
        if(err) throw err;
        callback()
    })
}
//리스트중 id값이 일치하는 부분을 삭제 하는 함수
function deletenotiById(id,callback){
    connection.query(`DELETE FROM seomun WHERE id='${id}'`,(err,result)=>{
        if(err) throw err;
        callback()
    })
}


function page (id, callback){
    //조회수 추가(근데 왜 새로고침 아니면 확인 불가인지?)
        connection.query(`SELECT * FROM seomun WHERE id=?`,[id],(err, result) => {
            if(err) {
                throw err;}
            callback(result);
        });
 }

module.exports = {
    getAllnoti,insertnoti,getnotiById,deletenotiById,updatenotiById,page
}
