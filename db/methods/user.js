const modelUser = require('../../models/user')

/**
 * 
 * @param {Object} user Contiene el Schema con los datos.
 */

const addUserOnDB = async(user) => {
    const User = new modelUser(user)
    return User.save()
}

module.exports = addUserOnDB