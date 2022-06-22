const express = require('express')
const router = express.Router()

router.get('/sub1',(req, res) =>{
    res.render("sub1.html")
})

router.get('/sub2',(req, res) =>{
    res.send("sub2")
})

module.exports = router;