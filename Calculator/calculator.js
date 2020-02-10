const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.get("/about", function(req, res){
    res.send("Hello, my name is Umida");
});



app.listen(3000);