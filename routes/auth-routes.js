const router = require('express').Router()
const passport = require('passport');



//auth login
router.get("/login",(req,res)=>{
    res.render('login',{user:req.user})
})

//auth logout
router.get('/logout',(req,res)=>{
    //handle with passport
    req.logout()
    res.redirect("/")
})

//auth with google
//send pantalla de consenimiento
router.get('/google',passport.authenticate('google',{
    //propiedad de alcance el passaport a recuperar
    scope:['profile']
}));
//problem redirect uri => create controller
//calback route for google redirect
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // res.send(req.user)
    res.redirect("/profile/")
})


module.exports = router