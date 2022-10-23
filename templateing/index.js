const express = require('express');
const app = express();

app.get('vew engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})