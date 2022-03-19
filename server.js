const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 80

app.use(express.json())

app.use(express.static('build'))

app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(port, () => {
    console.log('server is running on ' + port)
})
