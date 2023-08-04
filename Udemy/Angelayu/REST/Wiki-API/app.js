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
    title: String,
    content: String
})


//Defining model or collection

const Article = mongoose.model("Article", wikiSchema);
//chain Methods 
app.route('/articles')
    .get((req, res) => {
        Article.find().then((datas) => {
            res.send(datas)
            console.log("Data GET Requested !")
        })


    })
    .post((req, res) => {
        let newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })
        newArticle.save() //saves the article in Database

        console.log("Post data Requested !!")
        res.send("This is your post Data : " + req.body.title + " Content : " + req.body.content)
    })
    .delete((req, res) => {
        Article.deleteMany().then(() => {
            console.log("All data Deleted")
            res.send("Succefully Deleted the files")
        })
    })


app.route('/articles/:articleTitle')
    .get((req, res) => {
        Article.findOne({ title: req.params.articleTitle }).then((datas) => {
            res.send(datas)
            console.log("Data on article GET Requested !")
        }, (err) => {
            res.send("No Match Found bro")
            console.log(err)
        })
    })
    .put((req, res) => {
        Article.updateOne(
            { title: req.params.articleTitle },
            {
                title: req.body.title,
                content: req.body.content
            }
        ).then((data) => {
            res.send(data)
        })
    })
    .patch((req, res) => {
        Article.updateOne(
            { title: req.params.articleTitle },
            {
                $set: req.body
            }
        ).then((data) => {
            res.send(data)
        })
    })
    .delete((req, res) => {
        let deleteitem = req.params.articleTitle
        Article.deleteOne({ title: deleteitem }).then((data) => {
            res.send(data)
        }).catch((err) => {
            console.log("Some errors occured baby ")
        })
    })




//server

app.listen(port, () => {
    console.log(`The Wiki App is running on ${port}`)
})
