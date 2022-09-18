const express = require("express")
const app = express()
// console.dir(app)

// app.use((req, res) => {
//     console.log('We have got a new request')
//     res.send('<h1> This is my heading </h1>')
// })

app.get('/', (req, res) => {
    res.send('<h1> This is the home new page</h1>')
})
app.get('/cats', (req, res) => {
    res.send('<h1> meeoww</h1>')
})
app.post('/cats', (req, res) => {
    res.send('<h1> this is a post request on cats</h1>')
})
app.get('/dogs', (req, res) => {
    res.send('<h1>woof</h1>')
})

app.get('/man', (req, res) => {
    res.send('<h1> Ha ha ha</h1>')
})

app.get('/r/:subreddit/:postid', (req, res) => {
    const { subreddit, postid } = req.params;
    res.send(`<h1>your are viewing ${postid} post on  ${subreddit} subrediit</h1>`)
})


app.listen(8080, () => {
    console.log('listening on port 8080!')
})