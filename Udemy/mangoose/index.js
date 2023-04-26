const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Yes the connection is open and connected")
    })
    .catch(err => {
        console.log('ooh Error and the error is')
        console.log(err)
    })

//Schema 
// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
// {
//     movie : 'avenger',
//     year : 2019,
//     child : false,
//     rating : 'r'
// }
// // the schema will be
// {
//     movie : string,
//     year : Number,
//     child : Boolean,
//     rating : String
// }
const movieSchema = new mongoose.Schema({
    title: string,
    year: Number,
    score: Number,
    rating: string
})

const Movie = mongoose.model('Movie', movieSchema);

const avenger = new Movie({
    title: 'avenger',
    year: 2019,
    score: 9.2,
    rating: "UA"
})