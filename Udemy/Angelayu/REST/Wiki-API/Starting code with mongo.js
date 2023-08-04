const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const ejs = require("ejs");
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true });

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public")) //hosts all file on Public Folder
const port = 3000

const wikiSchema = new mongoose.Schema({
    Title: String,
    content: String
})

//Defining model or collection

const Article = mongoose.model("Article", wikiSchema);

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {

})







//server

app.listen(port, () => {
    console.log(`The Todo App is running on ${port}`)
})
