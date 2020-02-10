const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = weight / (height * height);

    res.send("Your BMI index is " + result);
});

app.get("/about", function(req, res){
    res.send("Hello, my name is Umida");
});



app.listen(3000);