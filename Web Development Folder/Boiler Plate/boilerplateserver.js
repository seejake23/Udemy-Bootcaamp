// npm init
// npm install body-parser
const bodyParser = require("body-parser");
// npm install express
const express = require("express");
const request = require("request");

const app = express();

app.get("/", function(req,res) {
    res.send("Server is up and running");
});






app.listen(3000, function(){
    console.log("Server is running on port 3000");
})