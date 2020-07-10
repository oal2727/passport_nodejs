const route = require('express').Router();

//first function 
//create middleware
const authCheck = (req,res,next) => {
    if(!req.user){
        //if user not logged in,
        res.redirect('/auth/login')
    }else{
        //pasar a la siguiente pieza que es la segunda funcion
        next()
    }
}

//second function
route.get('/',authCheck,(req,res)=>{
    // res.send('you are loggin , this your profile ' + req.user.username)
    //enviar parametros 
    res.render('profile',{user:req.user})
})
module.exports = route