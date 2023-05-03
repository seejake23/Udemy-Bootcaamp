const express = require('express');

//app is usually the word used
const app = express();

//defines what should happen when someone makes a get request to the home route 
// response and request can be anything like event (evt, e) but most commonly seen as req, res
app.get("/", function(request, response) {
    //sends message to website
    response.send("<h1>Hello</h1>");
})

app.get("/contact", function(req,res) {
    res.send("Contact me at: email.com");
});

app.get("/about", function(req,res) {
    res.send("<h1> Jake See, Veteran, Programmer, Gamer</h1>");
});

//app listens for a specific port 
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

