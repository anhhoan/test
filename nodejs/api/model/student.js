var mongoose= require('mongoose')
var Schema= mongoose.Schema
var data= new Schema({
    name:String,
    age:String
})
module.exports=mongoose.model("userdata",data)