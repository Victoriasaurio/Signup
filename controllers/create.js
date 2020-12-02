const addUserOnDB = require('../db/methods/user')
const encrypt = require('../utils/encrypt')
const generateID = require('../utils/generateID')

const create = async(req, res) => {
    try {
        req.body.password = encrypt(req.body.password, 10)
        req.body._id = generateID()
        await addUserOnDB(req.body)
        res.status(201).send({ id: req.body._id, message: 'success'})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

module.exports = {
    create
}