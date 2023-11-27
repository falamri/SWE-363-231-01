//BE_x-exercise_x
const express = require('express')
const app = express()

const conf = require('./routers/conf')

//req => middleware => res

//static assets
app.use(express.static('./public'))

//parse form data
app.use(express.urlencoded({extended: false}))

app.use('/formConf', conf)

app.listen(5000, () =>{
    console.log('Server is listening on port 5000...')
})