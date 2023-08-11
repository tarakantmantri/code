//jshint esversion:6
require("dotenv").config(); //Environment variable
const express = require('express')
const bodyParser = require("body-parser")
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });
// var encrypt = require('mongoose-encryption');//encryption plugin
// const md5 = require('md5') //md5 Hash Generator
const bcrypt = require("bcrypt")
const saltRounds = 2;

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public")) //hosts all file on Public Folder
const port = 3000


//defining Schema used for encrypt
const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

// console.log(process.env.SECRET);
//encrypt key 
// const secret = "This_is_my_Secret" //but this is visible and can be found in github
// const secret = process.env.SECRET
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] }) //encrypts the password field

//it will encrypt when you call Save, and decrypt when you call find.


//Defining model or collection

const User = mongoose.model("User", userSchema);



app.get('/', (req, res) => {
    res.render("home")
})
app.get('/register', (req, res) => {
    res.render("register")
})
app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        let newUser = new User({
            email: req.body.username,
            password: hash
        })
        newUser.save().then((data) => {
            console.log(data)
            res.render('secrets')
        }).catch((err) => {
            console.log(err)
        })
    });


})
app.get('/login', (req, res) => {
    res.render("login")
})
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ email: username }).then((data) => { //it finds and decripts 
        console.log(data);
        if (data) {
            bcrypt.compare(password, data.password, function (err, result) {
                if (result) {
                    res.render("secrets")
                } else {
                    res.render("Incorect")
                }
            });
        } else {
            console.log("Email Not Found")
            res.render("Incorect")
        }
    }).catch((err) => {
        console.log(err)
        res.send("error Happend")
    })
})

app.get("/logout", (req, res) => {
    console.log("User Log Out")
    res.redirect('/')
})
app.post('/', (req, res) => {

})

//server
app.listen(port, () => {
    console.log(`The Secrete App is running on ${port}`)
})
