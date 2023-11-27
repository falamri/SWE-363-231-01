//BE_x-exercise_x
const express = require('express')
const app = express()

//req => middleware => res

//static assets
app.use(express.static('./public'))

//parse form data
app.use(express.urlencoded({extended: false}))

app.post('/formConf', (req, res) => {
    const {name} = req.body;
    if(name){
    return res.status(200).send(`
    <h1>${name}, THANK YOU</h1>

    <p>We have successfully recieved it.</p>`)
    }

    res.status(401).send('Please Provide Credentials.')
})


app.listen(5000, () =>{
    console.log('Server is listening on port 5000...')
})