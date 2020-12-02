const bcrypt = require('bcrypt');

const encrypt = (something, satRounds) => {
    const salt = bcrypt.genSaltSync(satRounds)
    return bcrypt.hashSync(something, salt)
}

module.exports = encrypt