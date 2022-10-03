var mongoose= require('mongoose')
var Schema= mongoose.Schema
var studentModel= new Schema({
    username:String,
    password:String,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})
module.exports=mongoose.model("Student",studentModel)