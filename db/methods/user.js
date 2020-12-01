const modelUser = require('../../models/user')

const addUserOnDB = async(user, validateUser) => {
    const User = new modelUser(user)
    await User.save(validateUser)
}

module.exports = addUserOnDB