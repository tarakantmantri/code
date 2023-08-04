//jshint esversion:6
const express = require('express')
const bodyParser = require("body-parser")
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/t', { useNewUrlParser: true });
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public")) //hosts all file on Public Folder
const port = 3000

app.get('/', (req, res) => {
    res.render("home")
})
app.get('/register', (req, res) => {
    res.render("register")
})
app.post('/register', (req, res) => {
    res.send("under Development")
})
app.get('/login', (req, res) => {
    res.render("login")
})
app.post('/login', (req, res) => {
    res.send("wait things under construction")
})


app.post('/', (req, res) => {

})



//server
app.listen(port, () => {
    console.log(`The Secrete App is running on ${port}`)
})
