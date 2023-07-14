const express = require('express')
const bodyParser = require("body-parser")
const https = require('https');
const request = require("request")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")

})

app.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailid = req.body.emailid;
    const data = {
        members: [
            {
                email_address: emailid,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data)

    const url = "https://us21.admin.mailchimp.com/3.0/lists/dbc11615e2"
    const options = {
        method: "POST",
        auth: "tarakantmantri:a94ea048354c2cbb17551312282e1e92-us21"
    }
    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")

            response.on("data", (data) => {
                console.log(JSON.parse(data))
            })
        } else {
            res.sendFile(__dirname + "/failure.html")
        }
    })
    request.write(jsonData);
    request.end();
    // res.send("Hello " + firstName + " " + lastName + ". Your Email id is " + emailid)
})

app.post("/failure", (req, res) => {
    res.redirect('/')
})

//server
app.listen(port, () => {
    console.log(`The Mail app is running on ${port}`)
})

// a94ea048354c2cbb17551312282e1e92-us21
// dbc11615e2