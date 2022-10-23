const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'complex.html'))
})
app.get('/about', (req, res) => {
    res.send('hello world about')
})
app.get('/wiki', (req, res) => {
    res.sendFile(path.join(__dirname, 'complex.html'))
})




app.listen(port, () => {
    console.log(`The server is active on port ${port}`)
})
