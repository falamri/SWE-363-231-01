const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const {name} = req.body;
    if(name){
    return res.status(200).send(`
    <h1>${name}, THANK YOU</h1>

    <p>We have successfully recieved it.</p>`)
    }

    res.status(401).send('Please Provide Credentials.')
})

module.exports = router