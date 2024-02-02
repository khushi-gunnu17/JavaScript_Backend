require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
// total ports = 65535 (Many of them are free)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('khushiastrogeek')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please log in at khushi services.</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>YouTube</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port : ${port}`);
})

// paid app deployements
// hiroku
// digitalocean
// railway
// seenode
// render
// cyclic.sh