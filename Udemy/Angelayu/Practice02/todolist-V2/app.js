const express = require('express')
const bodyParser = require("body-parser")
// const https = require('https');
// const request = require("request")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolistDB', { useNewUrlParser: true });

//defining Schema

const itemSchema = new mongoose.Schema({
    Name: String
})

//Defining model or collection

const Item = mongoose.model("Item", itemSchema);

//example temorary items

let movie = new Item({
    Name: "Watch Openhiemer"
})
let eat = new Item({
    Name: "Eat Chicken Dinner"
})
let play = new Item({
    Name: "Play spiderman"
})

let defultItems = [movie, eat, play]
//intert the Items
//Item.insertMany(defultItems).then(() => console.log('all items are saved in Todolist DB'))
//find the items 



const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public")) //hosts all file on Public Folder
const port = 3000


// let items = ["Buy Foods"]; //here all stores

//get rout
app.get('/', (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    //date function
    let day = today.toLocaleDateString("en-US", options)
    console.log("Data Requested on / path")
    Item.find().then((foundItems) => {

        if (foundItems.length === 0) {
            Item.insertMany(defultItems).then(() => console.log('Defult items are saved in Todolist DB'))
            res.redirect("/")
        } else {

            res.render("list", {
                kindOfday: day,
                newListItems: foundItems,
            })
        }

    })
})


//post route
app.post('/', (req, res) => {
    let itemName = req.body.newItem;
    let userItem = new Item({
        Name: itemName
    })
    userItem.save().then(() => console.log('User Data Saved'));
    res.redirect("/")
   

})

app.post("/delete", (req, res) => {


    let checkedItemId = req.body.checkbox
    Item.findByIdAndRemove(checkedItemId).then(() => { console.log('Item Removed') })

    res.redirect("/")
})

//Custom List Names
app.get("/:custom", (req, res) => {
    const customListName = req.params.custom

})




//server

app.listen(port, () => {
    console.log(`The Todo App is running on ${port}`)
})
