//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Hey There to my Personal Blog page, I Have Created this Page for my web Development Journy and activities, You can Create new Blogs vy going to the Compose Section. ";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const allposts = [];

let today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}
let day = today.toLocaleDateString("en-US", options)
var link ="/posts/"
app.get('/', (req, res) => {
  res.render("home", {
    homeContent: homeStartingContent,
    postThiscont: allposts,
    date: day,


  }) //it renders the home.ejs file to the / route
})

app.get('/about', (req, res) => {
  res.render("about", {
    aboutContent: aboutContent
  })
})


app.get('/contact', (req, res) => {
  res.render("contact", {
    contactContent: contactContent
  })
})
app.get('/compose', (req, res) => {
  res.render("compose")
})


app.post("/compose", (req, res) => {
  let title = req.body.title;
  let postbody = req.body.post
  const post = {
    title: title,
    content: postbody
  }
  // console.log("title is : " + post.title)
  // console.log("Post  is : " + post.content)
  allposts.push(post)
  res.redirect("/")
  // console.log(allposts)
})


app.get("/posts/:postName", (req, res) => {
  const requestedTitle = req.params.postName;
  allposts.forEach(function (post) {
    const storedTitle = post.title;
    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    } else {
      console.log("Nothing in here")
    }

  })

})










app.listen(3000, function () {
  console.log("blogpost project on port 3000");
});

