const express = require('express')
const route = express()



route.get('/testing',(req,res)=>{
    res.send('test')
})

module.exports= route