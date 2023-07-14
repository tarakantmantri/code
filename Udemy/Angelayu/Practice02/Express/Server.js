const express = require("express")
const app = express()

app.get('/', (request, response) => {
    response.send("<h1>Hello Worlds</h1>")
})
app.get('/contact', (request, response) => {
    response.send("<h1>Contact me on tara@gmail.com</h1>")
})
app.get('/about', (request, response) => {
    response.send("<h1>Hi iam tarakant a Future developeer</h1>")
})

app.listen(3000, () => console.log("server started on port 3000"))
