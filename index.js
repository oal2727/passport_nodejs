const express = require('express')
const mongodb = require('mongoose')
const app = express()
let ejs = require('ejs')
//usar cookie sesion
const cookieSession = require('cookie-session')

const passportSetup = require('./config/passport-setup')
const passport = require('passport')
const keys = require('./config/key')
//uso de .env => dotenv
require('dotenv').config()

// const dotenv = require('dotenv')

// const { PORT } = process.env
const port = process.env.PORT;
// console.log(PORT)

//auth routes
const AuthRoutes = require('./routes/auth-routes')
const ProfileRoute = require('./routes/profile-routes')


app.set('view engine','ejs')
//configuraciones de la cookie tiempo and llaves(encription)
//enrcriptacion de cookie que solo dura un dia  no
app.use(cookieSession({
    maxAge:24 * 60 * 60 *1000,
    keys:[keys.session.cookieKey]
}))
//initialize passport
app.use(passport.initialize());
app.use(passport.session())

app.get('/',(req,res)=>{
    res.render('home',{user:req.user})
})

const options = {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true};
// keys.mongodb.dbURI
mongodb.connect(keys.mongodb.dbURI,options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
)


app.use('/api',require('./controller/Controller1'))
app.use('/auth',AuthRoutes)
app.use('/profile',ProfileRoute)




app.listen(port,function(){
    console.log("listen port ", port)
})