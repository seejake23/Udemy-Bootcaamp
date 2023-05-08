const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=30.7918613&lon=-83.7898868&appid=2d77872927e3f8443993dd4c22c512ac";
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

            res.write("<p>The weather description is " + description + ".</p>")
            res.write("<h1>The temperature in Boston is " + temp + " degrees F.</h1>")
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
        // JSON.stringify(object) would flat pack the JSON into a string
    });

});










app.listen(3000, function(){
    console.log("Server is running on port 3000");
})