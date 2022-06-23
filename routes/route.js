var express = require('express');
var expressLayouts = require('express-ejs-layouts');
const router = express.Router();

const {check,validationResult} = require('express-validator')





const db = require('./../db.js');


router.get('/noti',function(req,res,next) {
    db.getAllnoti((rows)=>{
        res.render('remake_notice',{rows:rows})
    })
    // res.send('test')
})

router.get('/notice',(req,res)=>{
    res.render('notice')
})

router.post('/store',[check('title').isByteLength({min:1 , max:300})],
    function(req,res,next){
        let errs = validationResult(req);
        console.log(errs);
        if(errs['errors'].length>0){
            res.render('notice',{errs:errs['errors']});
        }else{
            let param = JSON.parse(JSON.stringify(req.body));
            let title = param['title']
            let content = param['content']
            db.insertnoti(title,content,()=>{
                res.redirect('/noti');
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
router.post('/updateMemo',[check('title').isLength({min:1,max:300})],
    (req,res) =>{
        let errs = validationResult(req)
        let param = JSON.parse(JSON.stringify(req.body));
        let id = param['id']
        let title = param['title']
        let content = param['content']
        if (errs['errors'].length>0){
            db.getnotiById(id,(row)=>{
                res.render('updateMemo',{row:row[0],errs:errs['errors']})
            })
        }else{
            db.updatenotiById(id,title, content, ()=>{
                res.redirect('/noti')
            })
        }
    })




router.get('/deletenoti',(req,res)=>{
    let id = req.query.id
    db.deletenotiById(id,()=>{
        res.redirect('/noti')
    })
})


router.use(expressLayouts);

router.get('/',(req, res) =>{
    res.render('index')
})

router.get('/info',(req, res) =>{
    res.render("remake_info")
})


router.get('/login',(req, res) =>{
    res.render("login")
})
router.get('/join',(req, res) =>{
    res.render("join")
})
router.get('/main',(req, res) =>{
    res.render("index")
})

router.get('/noti1',(req, res) =>{
    res.render("notice_list")
})

module.exports = router; 



