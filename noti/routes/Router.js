var express = require('express')
var router = express.Router()

const {check,validationResult} = require('express-validator')


const db = require('./../db.js');


router.get('/',function(req,res,next) {
    db.getAllnoti((rows)=>{
        res.render('notice',{rows:rows})
    })
    // res.send('test')
})

router.get('/newnotice',(req,res)=>{
    res.render('newnotice')
})

router.post('/store', check('content').isByteLength({min:1,max:300}),
    function(req,res,next){
        let errs = validationResult(req);
        console.log(errs);
        if(errs['errors'].length>0){
            res.render('newnotice',{errs:errs['errors']});
        }else{
            let param = JSON.parse(JSON.stringify(req.body));
            let content = param['content']
            let content2 = param['content2']
            db.insertnoti( content,content2,()=>{
                res.redirect('/');
            });
        }
    });

router.get('/updateMemo',(req,res)=>{
    let id= req.query.id
    db.getnotiById(id,(row)=>{
        if(typeof id ==='undefined' || row.length<=0){
            res.status(404).json({error:'undefinde notice'})
        }else{
            res.render('updateMemo',{row:row[0]})
        }
    })
})
router.post('/updateMemo',[check('content').isLength({min:1,max:300})],
    (req,res) =>{
        let errs = validationResult(req)
        let param = JSON.parse(JSON.stringify(req.body));
        let id = param['id']
        let content = param['content']
        let content2 = param['content2']
        if (errs['errors'].length>0){
            db.getnotiById(id,(row)=>{
                res.render('updateMemo',{row:row[0],errs:errs['errors']})
            })
        }else{
            db.updatenotiById(id, content, content2, ()=>{
                res.redirect('/')
            })
        }
    })


router.get('/deletenoti',(req,res)=>{
    let id = req.query.id
    db.deletenotiById(id,()=>{
        res.redirect('/')
    })
})

module.exports = router; 