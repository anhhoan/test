const xlsx = require('xlsx')
const ItemModel = require('../model/index')
const readfile = async (req, res) => {
    try {
        let file = req.files[0]
        let wb = xlsx.readFile(file.path)
        let ws = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        ItemModel.insertMany(ws, (err, data) => {
            res.send(data)
        })
    } catch (error) {
        res.send(error)
    }
}
const getFile = async (req, res) => {
    try {
        let data = await ItemModel.find({},{_id:0,__v:0})
        res.send({
            message: 'success',
            data
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
}
const deleteStudent=async (req, res) => {
    try {
        let id = req.params.id
        await ItemModel.findByIdAndDelete(id)
        res.send({
            message: 'success',
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
}
const addStudent=async (req, res) => {
    try {
        let name = req.body.name
        let age = req.body.age
        const data=await ItemModel.create({
            name:name,
            age:age
        })
        console.log(data,'hhh');
        res.send({
            message: 'success',
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
}
const updateStudent=async(req,res)=>{
    try {
        let name = req.body.name
        let age=req.body.age
        let id=req.params.id
        await ItemModel.findByIdAndUpdate(id,{name:name, age:age})
        res.send({
            message: 'success'})
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
}
module.exports={
    readfile,
    getFile,
    deleteStudent,
    addStudent,
    updateStudent
}