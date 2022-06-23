var app = require('../app')
var port =procss.env.PORT || 3000


app.listen(port, () =>{
    console.log(`express 실행 ${port}`)
})