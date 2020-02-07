const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello, my world");
});

app.get("/about", function(req, res){
    res.send("Hello, my name is Umida");
});



app.listen(3000);