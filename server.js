const config = require('./config/config')
const app = require('./app')
const mongoose = require('mongoose')

//Start server
mongoose.connect(config.CONNECTION, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, 
    (err, res) => {
        if(err) throw err;
        console.log('Database ONLINE')
    })
app.listen(config.PORT, () => {
    console.log(`Server running on http://localhost:${config.PORT}`)
})