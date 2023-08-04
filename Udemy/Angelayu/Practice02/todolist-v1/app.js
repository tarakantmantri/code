const express = require('express')
const bodyParser = require("body-parser")
// const https = require('https');
// const request = require("request")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public"))
const port = 3000
let items = ["Buy Foods"];
app.get('/', (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("en-US", options)

    res.render("list", {
        kindOfday: day,
        newListItems: items,
    })

})

app.post('/', (req, res) => {
    let item = req.body.newItem;
    items.push(item)
    console.log(item)
    res.redirect("/")

})




//server

app.listen(port, () => {
    console.log(`The Todo App is running on ${port}`)
})
