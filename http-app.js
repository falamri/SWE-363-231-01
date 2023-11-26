//BE_x-exercise_x
//New merged BE 3(3,4, &5) 

const express = require('express');
const path = require('path')

const app = express()

app.use(express.static('./public'))


app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found </h1>')
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})