var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:String,
    googleId: String,
    thumbnail:String
})


const User = mongoose.model('user',UserSchema)

module.exports = User  