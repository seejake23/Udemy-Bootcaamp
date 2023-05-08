const express = require("express");
const https = require("https");
// npm i body-parser *needs to be installed in console
const bodyParser = require("body-parser")

const app = express();

// needed to parse through input
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = req.body.cityName;

    //needs Weather appid token to run
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=";
    https.get(url, function(response) {
        // returns HTTP status code in the terminal if functional or not 
        console.log(response.statusCode);

        //returns the data in hexidecimal 
        response.on("data", function(data) {
            console.log(data);
        });

        //turn the hexidecial into a JSON 
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            const temp = weatherData.main.temp;
            console.log(temp);

            const description = weatherData.weather[0].description;
            console.log(description);

            const icon = weatherData.weather[0].icon; 
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>Sky description: " + description + ".</p>")
            res.write("<h1>The temperature in "+ query +  " is " + temp + " degrees F.</h1>")
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
        // JSON.stringify(object) would flat pack the JSON into a string
    });
})










app.listen(3000, function(){
    console.log("Server is running on port 3000");
})