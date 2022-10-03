var studentModel = require('../model/index')
var dataModel=require('../model/student')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const getStudent = async (req, res) => {
    try {
        const listStudent = await dataModel.find({})
        res.send({
            listStudent,
            message: 'success'
        })
      

    } catch (error) {
        res.send({

            message: 'error'
        })

    }
}
const addStudent = async (req, res) => {
    try {
        const body = req.body
        const listStudent = await dataModel.create({
            name: body.name        })
        res.send({
            listStudent,
            message: 'success'
        })

    } catch (error) {
        res.send({

            message: 'error'
        })

    }
}



const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id
        const listStudent = await dataModel.findByIdAndDelete(id)

        res.send({
            listStudent,
            message: 'success'
        })

    } catch (error) {
        res.send({

            message: 'error'
        })

    }
}
const updateStudent = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const listStudent = await dataModel.findByIdAndUpdate(id, {
            name: body.name,
        })

        res.send({
            listStudent,
            message: 'success'
        })

    } catch (error) {
        res.send({

            message: 'error'
        })

    }
}

const searchStudent = async (req, res) => {
    try {
        const textSearch = req.query.textSearch
        const listStudent = await dataModel.find({
            name: {
                $regex: textSearch,
                $options: 'i'
            }
        })

        res.send({
            listStudent,
            message: 'success',
            
        })

    } catch (error) {
        res.send({

            message: 'error'
        })

    }
}
const signUp = async (req, res) => {
    try {
        const body = req.body
        const username = body.username
        let check = await studentModel.findOne({ username })
        if (check) {
            res.send({ message: 'error' })
        }
        else {
            const password = await bcrypt.hash(req.body.password, 10)
            console.log(password);
            const data = await studentModel.create({ username: username, password: password })
            res.send({
                data,
                message: 'success'
            })
        }

    } catch (error) {
        res.send({

            message: 'error'
        })

    }
}
const login = async (req, res) => {
    try {
        const ACCESS_TOKEN_SECRET='ACCESS_TOKEN_SECRET'
        const username = req.body.username
        const password = req.body.password
        const data = await studentModel.findOne({ username: username })
        const tokenData = await studentModel.findOne({ username }).select(["-password"])
        if (data) {
            const check = await bcrypt.compare(password, data.password)
            if(check===true){
                const token= jwt.sign({tokenData},ACCESS_TOKEN_SECRET,{expiresIn:'5d'})
                res.send({
                    message:'success',
                    token,
                    role:data.role                   
                })
            }
            else{
                res.send({message:'failure'})
                res.send({message2:'password'})
            }
        }
        else{
            res.send({message:'failure'})
            res.send({message2:'user'})
        }
    } catch (error) {
        res.send({ message: 'failure' })

    }
}

module.exports = {
    getStudent,
    addStudent,
    deleteStudent,
    updateStudent,
    searchStudent,
    signUp, login
}