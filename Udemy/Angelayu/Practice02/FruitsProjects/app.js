//connecting to mongodb server
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true }); //it will create a Database named FruitsDB

//defining the schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String, // validating name type
        required: [true, "Please Provide the name"] //Validating name requirement with custom Error Message
    },
    rating: {
        type: Number, //using Mongoose built in validator
        min: 1, // minimum value is = or greater than 1
        max: 10 // Maximum less than 10
    },
    review: String
});
//defining the collection with the schema 
const Fruit = mongoose.model("Fruit", fruitSchema);

//creating the data here :

const apple = new Fruit({
    name: "apple",
    rating: 8,
    review: "An apple a day Keeps Doctors away"
})

// apple.save().then(() => console.log('Data Saved')); //saves the data

//update the data
// Fruit.updateOne({ name: "GREEEN apple" }, { name: "peach" }).then(() => console.log("data Updated"))
//Delete the Data

// Fruit.deleteOne({ name: "peach" }).then(() => console.log("data Deleted"))

// const orrange = new Fruit({
//     name: "Orrange",
//     rating: 5,
//     review: "Sweet and pickely"
// })
// const banana = new Fruit({
//     name: "Banana",
//     rating: 10,
//     review: "So nice fruit and can be eat in lunch"
// })

//inserting all the data to Fruit Collection
// Fruit.insertMany([apple, orrange, banana]).then(() => console.log('Fruits Data Saved'));

//inserting single data to fruit collection
// fruit.save().then(() => console.log('Data Saved'));

//search the document
// Fruit.find().then((datas) => {

//     datas.forEach((data) => {
//         console.log(data.name + ": Rating is : " + data.rating + "/10")
//         mongoose.connection.close()//it closes the connection no ned to restart server
//     })
// })

// person data

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    marriage: Boolean,
    personality: String,
    favoriteFruit: fruitSchema //Relationship with Fruits database
});
const Person = mongoose.model("Person", personSchema);

const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Sweet and pickely"
})
// orange.save().then(() => console.log('Orange Saved'));

const Viky = new Person({
    name: "Vickey",
    age: 20,
    sex: "Male",
    marriage: false,
    personality: "Good Friend",
    favoriteFruit: orange
})
// Viky.save().then(() => console.log('Vickey Saved'));

Person.updateOne({ name: "Simran" }, { favoriteFruit: apple }).then(() => console.log("Simran Food Updated"))

// const person = new Person({
//     name: "Simran",
//     age: 25,
//     sex: "Female",
//     marriage: false,
//     personality: "Good Caring and Lovable, takes care of mine !"
// })

// person.save().then(() => console.log('Person Data Saved'));