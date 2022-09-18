const jokes = require('give-me-a-joke')
const colors = require('colors')
var cowsay = require("cowsay");
jokes.getRandomDadJoke(function (joke) {

    console.log('here is a dad joke:');
    console.log(joke);
})
jokes.getRandomCNJoke(function (joke) {

    console.log('here is a CN joke:');
    console.log(joke);
})
// jokes.getRandomJokeOfTheDay(function (joke) {

//     console.log('here is the joke of the day:');
//     console.log(joke);
// })
// jokes.getCustomJoke(function (joke) {

//     console.log('here is custom joke the day:');
//     console.log(joke);
// })