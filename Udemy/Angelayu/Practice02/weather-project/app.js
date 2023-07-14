const express = require('express')
const bodyParser = require("body-parser")
const https = require('https');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")

})

app.post('/', (req, res) => {

    const location = req.body.location;
    if (location) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=12add467c26b1a0f3b4772297ce523a3&units=metric"


        https.get(url, (response) => {
            console.log(response.statusCode)
            if (response.statusCode == 200) {
                response.on("data", (data) => {
                    const weatherData = JSON.parse(data)
                    const locationapi = weatherData.name;
                    const temperature = weatherData.main.temp
                    const humidity = weatherData.main.humidity
                    const description = weatherData.weather[0].description
                    const feelsLike = weatherData.main.feels_like
                    const icon = weatherData.weather[0].icon
                    const imageurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

                    console.log(`The Weather of ${locationapi} is ${description} . Temperature is ${temperature} but it feels like ${feelsLike} & Humidity is ${humidity}`)
                    res.write(`<h1>The Weather of ${locationapi} is<br> ${description} <br> Temperature is ${temperature} <br> but it feels like ${feelsLike} <br> & Humidity is ${humidity}</h1>`)
                    res.write(`<img src="${imageurl}" alt="" srcset="">`)
                    res.send()

                })
            } else {
                res.send("Enter a valid Location")
            }
        })
    }
    else {
        res.send("Enter a valid Location")
    }
})


//server
app.listen(port, () => {
    console.log(`The Weather app is running on ${port}`)
})


