var mongoose = require('mongoose')
var Schema= mongoose.Schema

var ItemModel = new Schema({
    name:{
        type:String
    },
    age:{
        type: Number
    }
})
module.exports=mongoose.model('Item',ItemModel)