const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2
    res.send("The value of the addition is " + result)
})
//bmi Calculator
app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + "/bmical.html")
})

app.post('/bmi', (req, res) => {

    var weight = Number(req.body.weight)
    var height = Number(req.body.height)

    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height)
        / 10000)).toFixed(2);

    // Dividing as per the bmi conditions
    if (bmi < 18.6) result =
        `Under Weight : <span style="color:red">${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9)
        result =
            `Normal : <span>${bmi}</span>`;

    else result =
        `Over Weight : <span>${bmi}</span>`;
    res.send("Your Bmi is  " + bmi + " kg/m2  " + "and You are  " + result)
})

app.listen(port, () => {
    console.log(`Calculator app listening on port ${port}`)
})
