const addUserOnDB = require('../db/methods/user')

const create = async(req, res) => {
    try {
        const body = req.body
        let status = 0, message = {}
        function validateUser(err, user) {
            status = err ? 500:201
            message = err ? {message: 'ERROR user not validate'}:{user}
            res.status(status).send(message)
        }
        await addUserOnDB(body, validateUser)
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

module.exports = {
    create
}