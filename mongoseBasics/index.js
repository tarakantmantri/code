const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log('Succesfully connected to the data base')
    })
    .catch(err => {
        console.log('Oh no error')
        console.log(err)
    })








// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/movieApp');

//     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function () {
//     console.log(`hurre database connected`)
// })